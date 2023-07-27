import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Icon from '@expo/vector-icons/Feather'

import Logo from '../src/assets/logo.svg'
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Switch, TextInput } from "react-native-gesture-handler";
import { useState } from "react";

export default function NewMemory() {
    const { bottom, top } = useSafeAreaInsets();
    const [isPublic, setIsPublic] = useState(false)
    return (
        <ScrollView
            contentContainerStyle={[styles.view, { paddingBottom: bottom, paddingTop: top }]}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
                <Logo />
                <Link href="/memories" asChild>
                    <TouchableOpacity style={styles.link}>
                        <Icon name="arrow-left" size={16} color='#fff'></Icon>
                    </TouchableOpacity>
                </Link>
            </View>
            <View style={{ marginTop: 24, gap: 24 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <Switch value={isPublic} onValueChange={setIsPublic} thumbColor={isPublic ? '#9b79ea' : "#9e9ea0"} />
                    <Text style={{ fontSize: 16, color: '#bebebf' }}>Tornar memória publica</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ height: 128, justifyContent: 'center', borderRadius: 10, borderStyle: "dashed", borderColor: '#2c2c31', borderWidth: 2, backgroundColor: 'rgba(255,255,255,0.5)', alignItems: 'center' }}
                >
                    <View
                        style={{ flexDirection: 'row', gap: 8, alignItems: "center" }}
                    >
                        <Icon
                            name="image"
                            color='#fff'
                        />
                        <Text style={{ fontSize: 14, color: '#9e9ea0' }}>
                            adicionar foto ou video de capa
                        </Text>
                    </View>
                </TouchableOpacity>

                <TextInput
                    multiline
                    style={{ padding: 0, fontSize: 18, color: '#eaeaea' }}
                    placeholderTextColor='#56565a'
                    placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar"
                />
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={[styles.button, { alignSelf: 'flex-end', flexDirection: "row", justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 8 }]}
                >
                    <Text style={[styles.alt, { textTransform: 'uppercase', textAlignVertical: 'top' }]}>
                        Salvar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    gray50: {
        color: '#eaeaea'
    },
    gray100: {
        color: '#bebebf'
    },
    alt: {
        fontFamily: 'BaiJamjuree_700Bold'
    },
    link: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#8257e5'
    },
    button: {
        borderRadius: 25,
        backgroundColor: '#04d361'
    },

})