import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, useColorScheme, FlatList, ScrollView } from 'react-native';
import KanjiListCell from '../components/KanjiListCell';
import { Kanji, KanjiMapper } from '../model/kanji';
import Video from 'react-native-video';
import { SvgXml } from 'react-native-svg';
import KanjiPlaygroundList from '../components/KanjiPlaygroundList';
import DetailExamples from '../components/DetailExamples';
import DetailRadical from '../components/DetailRadical';

const Detail = ({route}) => {
    const kanji_temp = route.params.kanji;
    const detailStyle = useColorScheme() == 'light' ? detailStyle_light : detailStyle_dark;

    const [imgXml, setImgXml] = useState('<svg></svg>');
    const [iconXml, setIconXml] = useState('<svg></svg>');

    const fetchXml = async () => {
        const xml = await (await fetch(kanji.image)).text();
        const iconxml = await (await fetch(kanji.radical.position)).text();
        setImgXml(xml);
        setIconXml(iconxml);
    }

    useEffect(() => {
        fetchXml();
    }, []);

    const kanji = KanjiMapper.ApiJsonToKanji({
        "kanji": {
            "character": "所",
            "meaning": {
                "english": "place"
            },
            "strokes": {
                "count": 8,
                "timings": [
                    0,
                    1.465,
                    2.598,
                    3.465,
                    4.332,
                    5.332,
                    6.265,
                    7.198,
                    8.533333
                ],
                "images": [
                    "https://media.kanjialive.com/kanji_strokes/(ba)sho_1.svg",
                    "https://media.kanjialive.com/kanji_strokes/(ba)sho_2.svg",
                    "https://media.kanjialive.com/kanji_strokes/(ba)sho_3.svg",
                    "https://media.kanjialive.com/kanji_strokes/(ba)sho_4.svg",
                    "https://media.kanjialive.com/kanji_strokes/(ba)sho_5.svg",
                    "https://media.kanjialive.com/kanji_strokes/(ba)sho_6.svg",
                    "https://media.kanjialive.com/kanji_strokes/(ba)sho_7.svg",
                    "https://media.kanjialive.com/kanji_strokes/(ba)sho_8.svg"
                ]
            },
            "onyomi": {
                "romaji": "sho",
                "katakana": "ショ"
            },
            "kunyomi": {
                "romaji": "tokoro",
                "hiragana": "ところ"
            },
            "video": {
                "poster": "https://media.kanjialive.com/kanji_strokes/(ba)sho_8.svg",
                "mp4": "https://media.kanjialive.com/kanji_animations/kanji_mp4/(ba)sho_00.mp4",
                "webm": "https://media.kanjialive.com/kanji_animations/kanji_webm/(ba)sho_00.webm"
            }
        },
        "radical": {
            "character": "⼧",
            "strokes": 4,
            "image": "https://media.kanjialive.com/radical_character/todare.svg",
            "position": {
                "hiragana": "たれ",
                "romaji": "tare",
                "icon": "https://media.kanjialive.com/rad_positions/tare.svg"
            },
            "name": {
                "hiragana": "とだれ",
                "romaji": "todare"
            },
            "meaning": {
                "english": "door"
            },
            "animation": [
                "https://media.kanjialive.com/rad_frames/todare0.svg",
                "https://media.kanjialive.com/rad_frames/todare1.svg",
                "https://media.kanjialive.com/rad_frames/todare2.svg"
            ]
        },
        "references": {
            "grade": 3,
            "kodansha": "568",
            "classic_nelson": "1821"
        },
        "examples": [
            {
                "japanese": "場所（ばしょ）",
                "meaning": {
                    "english": "place"
                },
                "audio": {
                    "opus": "https://media.kanjialive.com/examples_audio/audio-opus/(ba)sho_06_a.opus",
                    "aac": "https://media.kanjialive.com/examples_audio/audio-aac/(ba)sho_06_a.aac",
                    "ogg": "https://media.kanjialive.com/examples_audio/audio-ogg/(ba)sho_06_a.ogg",
                    "mp3": "https://media.kanjialive.com/examples_audio/audio-mp3/(ba)sho_06_a.mp3"
                }
            },
            {
                "japanese": "住所（じゅうしょ）",
                "meaning": {
                    "english": "address"
                },
                "audio": {
                    "opus": "https://media.kanjialive.com/examples_audio/audio-opus/(ba)sho_06_b.opus",
                    "aac": "https://media.kanjialive.com/examples_audio/audio-aac/(ba)sho_06_b.aac",
                    "ogg": "https://media.kanjialive.com/examples_audio/audio-ogg/(ba)sho_06_b.ogg",
                    "mp3": "https://media.kanjialive.com/examples_audio/audio-mp3/(ba)sho_06_b.mp3"
                }
            },
            {
                "japanese": "近所（きんじょ）",
                "meaning": {
                    "english": "neighborhood"
                },
                "audio": {
                    "opus": "https://media.kanjialive.com/examples_audio/audio-opus/(ba)sho_06_c.opus",
                    "aac": "https://media.kanjialive.com/examples_audio/audio-aac/(ba)sho_06_c.aac",
                    "ogg": "https://media.kanjialive.com/examples_audio/audio-ogg/(ba)sho_06_c.ogg",
                    "mp3": "https://media.kanjialive.com/examples_audio/audio-mp3/(ba)sho_06_c.mp3"
                }
            },
            {
                "japanese": "役所（やくしょ）",
                "meaning": {
                    "english": "public office"
                },
                "audio": {
                    "opus": "https://media.kanjialive.com/examples_audio/audio-opus/(ba)sho_06_d.opus",
                    "aac": "https://media.kanjialive.com/examples_audio/audio-aac/(ba)sho_06_d.aac",
                    "ogg": "https://media.kanjialive.com/examples_audio/audio-ogg/(ba)sho_06_d.ogg",
                    "mp3": "https://media.kanjialive.com/examples_audio/audio-mp3/(ba)sho_06_d.mp3"
                }
            },
            {
                "japanese": "名所（めいしょ）",
                "meaning": {
                    "english": "famous place"
                },
                "audio": {
                    "opus": "https://media.kanjialive.com/examples_audio/audio-opus/(ba)sho_06_e.opus",
                    "aac": "https://media.kanjialive.com/examples_audio/audio-aac/(ba)sho_06_e.aac",
                    "ogg": "https://media.kanjialive.com/examples_audio/audio-ogg/(ba)sho_06_e.ogg",
                    "mp3": "https://media.kanjialive.com/examples_audio/audio-mp3/(ba)sho_06_e.mp3"
                }
            },
            {
                "japanese": "研究所（けんきゅうじょ）",
                "meaning": {
                    "english": "research institute"
                },
                "audio": {
                    "opus": "https://media.kanjialive.com/examples_audio/audio-opus/(ba)sho_06_f.opus",
                    "aac": "https://media.kanjialive.com/examples_audio/audio-aac/(ba)sho_06_f.aac",
                    "ogg": "https://media.kanjialive.com/examples_audio/audio-ogg/(ba)sho_06_f.ogg",
                    "mp3": "https://media.kanjialive.com/examples_audio/audio-mp3/(ba)sho_06_f.mp3"
                }
            },
            {
                "japanese": "停留所（ていりゅうじょ）",
                "meaning": {
                    "english": "bus stop"
                },
                "audio": {
                    "opus": "https://media.kanjialive.com/examples_audio/audio-opus/(ba)sho_06_g.opus",
                    "aac": "https://media.kanjialive.com/examples_audio/audio-aac/(ba)sho_06_g.aac",
                    "ogg": "https://media.kanjialive.com/examples_audio/audio-ogg/(ba)sho_06_g.ogg",
                    "mp3": "https://media.kanjialive.com/examples_audio/audio-mp3/(ba)sho_06_g.mp3"
                }
            },
            {
                "japanese": "所有する（しょゆうする）",
                "meaning": {
                    "english": "possess"
                },
                "audio": {
                    "opus": "https://media.kanjialive.com/examples_audio/audio-opus/(ba)sho_06_h.opus",
                    "aac": "https://media.kanjialive.com/examples_audio/audio-aac/(ba)sho_06_h.aac",
                    "ogg": "https://media.kanjialive.com/examples_audio/audio-ogg/(ba)sho_06_h.ogg",
                    "mp3": "https://media.kanjialive.com/examples_audio/audio-mp3/(ba)sho_06_h.mp3"
                }
            },
            {
                "japanese": "所（ところ）",
                "meaning": {
                    "english": "place"
                },
                "audio": {
                    "opus": "https://media.kanjialive.com/examples_audio/audio-opus/(ba)sho_06_i.opus",
                    "aac": "https://media.kanjialive.com/examples_audio/audio-aac/(ba)sho_06_i.aac",
                    "ogg": "https://media.kanjialive.com/examples_audio/audio-ogg/(ba)sho_06_i.ogg",
                    "mp3": "https://media.kanjialive.com/examples_audio/audio-mp3/(ba)sho_06_i.mp3"
                }
            },
            {
                "japanese": "台所（だいどころ）",
                "meaning": {
                    "english": "kitchen"
                },
                "audio": {
                    "opus": "https://media.kanjialive.com/examples_audio/audio-opus/(ba)sho_06_j.opus",
                    "aac": "https://media.kanjialive.com/examples_audio/audio-aac/(ba)sho_06_j.aac",
                    "ogg": "https://media.kanjialive.com/examples_audio/audio-ogg/(ba)sho_06_j.ogg",
                    "mp3": "https://media.kanjialive.com/examples_audio/audio-mp3/(ba)sho_06_j.mp3"
                }
            },
            {
                "japanese": "居所（いどころ）",
                "meaning": {
                    "english": "whereabouts"
                },
                "audio": {
                    "opus": "https://media.kanjialive.com/examples_audio/audio-opus/(ba)sho_06_k.opus",
                    "aac": "https://media.kanjialive.com/examples_audio/audio-aac/(ba)sho_06_k.aac",
                    "ogg": "https://media.kanjialive.com/examples_audio/audio-ogg/(ba)sho_06_k.ogg",
                    "mp3": "https://media.kanjialive.com/examples_audio/audio-mp3/(ba)sho_06_k.mp3"
                }
            }
        ]
    })

    return (
        <View style={detailStyle.container}>
            <Text style={detailStyle.text}>{kanji.onyomi}</Text>
            <Text style={detailStyle.text}>{kanji.kunyomi}</Text>
                <SvgXml
                    xml={imgXml
                        .replace(/fill="#[0-9a-f]{6}"/g, `fill=${detailStyle.svg.color}`)}
                    width="100"
                height="100" />
            <Text style={detailStyle.tinyText}>{kanji.strokes + " strokes"}</Text>
            <Text style={detailStyle.meaningText}>{kanji.meaning}</Text>

            <Text style={detailStyle.title}>Radical</Text>
            <DetailRadical character={kanji.radical.character} icon={iconXml}/>

            <Text style={detailStyle.title}>Examples</Text>
            <DetailExamples data={kanji.examples} />
        </View>
    );
};

 

const detailStyle_light = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#e4e4e4",
    },
    svg: {
        color: "black"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    text: {
        color: "black"
    },
    tinyText: {
        fontSize: 10,
        color: "black"
    },
    meaningText: {
        fontSize: 50,
        color: "#FF5C5C",
        fontWeight: "900",

    }
})


const detailStyle_dark = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1c1c1c",
    },
    svg: {
        color: "white"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
    },
    text: {
        color: "white"
    },
    tinyText: {
        fontSize: 10,
        color: "white"
    },
    meaningText: {
        fontSize: 50,
        color: "#FF5C5C",
        fontWeight: "900",

    }
});

export default Detail;