import { FastifyInstance } from 'fastify';
import axios from 'axios';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

export async function authRoutes(app: FastifyInstance   ) {
    app.post('/register',async (request) => {
        const bodySchema = z.object({
            code : z.string(),
        });
        const { code } = bodySchema.parse(request.body);
        
        const accessTokenResponse = await axios.post('https://github.com/login/oauth/access_token',null,{
            params:{
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret:process.env.GITHUB_CLIENT_SECRETE,
                code,
            },
            headers:{
                Accept: 'application/json',
            }
        });

        const { access_token  } = accessTokenResponse.data;

        const userResponser = await axios.get('https://api.github.com/user',{
            headers:{
                Authorization:`Bearer ${access_token}`,
            }
        });

        const userSchema = z.object({
            id: z.number(),
            login: z.string(),
            name: z.string(),
            avatar_url: z.string().url(),
        });

        const userInfo = userSchema.parse(userResponser.data);

        let user = await prisma.user.findUnique({
            where:{
                githubid: userInfo.id
            }
        });

        if(!user){
            user = await prisma.user.create({
                data:{
                    githubid: userInfo.id,
                    nome: userInfo.name,
                    login: userInfo.login,
                    avatar: userInfo.avatar_url,
                }
            });
        }

        const token = app.jwt.sign({ 
            name: user.nome,
            avatar: user.avatar,
         },{
            sub: user.id,
            expiresIn: '30 days',
         });
         
        return {token};
    });

    
}