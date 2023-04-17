import {
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ScrollView,
    Easing
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Card } from "../components/Card";
import { getNumber, ready } from "../api/useFetch";
import { Notifier } from "react-native-notifier";

export const LobbyPage = (props: any) => {
    const userId = props.route.params.userId;
    const match: any = props.route.params.match;
    const cards: any = props.route.params.cards.cards;
    const first: any = props.route.params.match.numbers[0];
    const [isDisabled, setIsDisabled] = useState(false);
    const [curNumber, setCurNumber] = useState(0);
    const [extracted, setExtracted]: any = useState(new Set());


    useEffect(() => {
        const interval = setInterval(async () => {

            const { data } = await getNumber(match.id);

            if (data.bingo == true) {
                navigation.navigate("EndGamePage" as never, { userId } as never);
                clearInterval(interval);
            }

            if (data.number != first) {
                setCurNumber(data.number);
                setExtracted(new Set(match.numbers.slice(1, data.actual_move + 1)))
            }

        }, 1000);
        return () => clearInterval(interval);
    }, [])



    const navigation = useNavigation();


    const onReadyPressed = async () => {
        styles.buttonReady.opacity = 0;
        setIsDisabled(true);
        await ready(match?.id);
        console.warn("La partita inizierà a breve!")
        Notifier.showNotification({
            title: 'La partita inizierà a breve! ',
            duration: 3000,
            showAnimationDuration: 300,
            showEasing: Easing.bounce,
            onHidden: () => console.log('Hidden'),
            onPress: () => console.log('Press'),
            hideOnPress: true,

        });
        styles.buttonReady.opacity = 0;

    };


    return (



        <View style={styles.container}>
            <TouchableOpacity
                onPress={onReadyPressed}
                style={styles.buttonReady}
                disabled={isDisabled}


            >
                <Text style={styles.buttonReadyText}>Pronto!</Text>
            </TouchableOpacity>
            <View style={styles.textWrapper}>
                <Text style={styles.hiText}>Numero corrente: {curNumber} </Text>
                <Text style={styles.userText}>
                    Numeri estratti : {(Array.from(extracted)).sort(function (a: any, b: any) {
                        return (a) - (b);
                    }).toString()}

                </Text>
            </View>

            <ScrollView>
                {cards?.map((card: any, i: number) =>
                    <Card
                        key={i + 1}
                        match_id={match.id}
                        user_id={userId}
                        card={card}
                        cardNumber={i + 1}
                        extracted={extracted} />
                )}

            </ScrollView>

        </View>



    );
};


const TEXT: TextStyle = {
    color: "black",
    textAlign: "left",
    marginLeft: 15,
    marginRight: 15
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
    },
    content: {
        paddingHorizontal: 30,
    },
    form: {
        marginBottom: 100,
    },
    button: {
        height: 30,
        borderRadius: 25,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 5,
    },
    buttonReady: {
        height: 50,
        borderRadius: 25,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 5,
        opacity: 1
    },
    buttonText: {
        ...TEXT,
    },
    buttonReadyText: {
        color: "black",
        textAlign: "center",
        fontSize: 20,
    },
    textWrapper: {
        marginTop: 30,
        marginBottom: 30,
    },
    hiText: {
        ...TEXT,
        fontSize: 30,
        lineHeight: 50,
        fontWeight: "bold",
    },
    userText: {
        ...TEXT,
        fontSize: 16,
        lineHeight: 30,
    },
});
