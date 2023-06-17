import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';



export async function memoriesRoutes(app:FastifyInstance) {
app.get('/memories',async()=>{

    const memories = await prisma.memory.findMany({
        orderBy:{
            createdAt:'asc'
        }
    });

    return memories.map((memory)=>{
        return {
            id: memory.id,
            coverUrl: memory.coverUrl,
            resume: memory.content.substring(0,115).concat('...')
        };
    });
});
    
app.get('/memories/:id',async(request)=>{

    const paramsSchema = z.object({
        id: z.string().uuid(),
        });

    const { id } = paramsSchema.parse(request.params);

    const memory = await prisma.memory.findUniqueOrThrow({
        where:{
            id
        }
    });
    return memory;
});

app.post('/memories',async(request)=>{
    const bodySchema = z.object({
        content: z.string(),
        coverUrl: z.string(),
        isPublic: z.coerce.boolean().default(false),
    });
    
    const {content,coverUrl,isPublic} = bodySchema.parse(request.body);

    const memory = await prisma.memory.create({
        data:{
            content,
            coverUrl,
            isPublic,
            userId: 'be02dd0d-5f85-490c-a5b4-75a2fb130ea0'
        }
    });
    return memory;
    });

app.put('/memories/:id',async(request)=>{
    const bodySchema = z.object({
        content: z.string(),
        coverUrl: z.string(),
        isPublic: z.coerce.boolean(),
    });
    const paramsSchema = z.object({
        id: z.string().uuid()
    });

    const {id} = paramsSchema.parse(request.params);

    const {content, coverUrl, isPublic} = bodySchema.parse(request);

    const memory = await prisma.memory.update({
        where:{
            id
        },
        data:{
            content,
            coverUrl,
            isPublic,
            
        }
    });
    return memory;
    });

app.delete('/memories/:id',async(request)=>{
    const paramsSchema = z.object({
        id: z.string().uuid()
    });

    const {id} = paramsSchema.parse(request.body);

    await prisma.memory.delete({
        where:{
            id,
        }
    });
    });
    
}