import {
    TouchableOpacity, Text, StyleSheet,
    TextStyle,
    Easing,
} from "react-native"
import { DataTable } from "react-native-paper"
import { getBingo, getCinquina } from "../api/useFetch";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Notifier } from "react-native-notifier";


export const Card = ({ user_id, match_id, card, cardNumber, extracted }: any) => {
    const [isDisabledCinquina, setIsDisabledCinquina] = useState(false);
    const [isDisabledBingo, setIsDisabledBingo] = useState(false);
    const navigation = useNavigation();

    if (isDisabledCinquina) {
        styles.buttonCinquina.opacity = 0;
    } else {
        styles.buttonCinquina.opacity = 1;
    }

    let rows: number[][] = [];
    for (let i = 0; i < 20; i += 5) {
        let row: number[] = card.slice(i, i + 5)
        rows.push(row);
    }

    const onCinquinaPressed = async (user_id: string, match_id: number) => {
        await getCinquina(user_id, match_id).then((res: any) => {
            if (res.data.status == false) {
                Notifier.showNotification({
                    title: res.data.message,
                    showAnimationDuration: 300,
                    showEasing: Easing.bounce,
                    onHidden: () => console.log('Hidden'),
                    onPress: () => console.log('Press'),
                    hideOnPress: true,

                });
            } else {

                setIsDisabledCinquina(true);
                Notifier.showNotification({
                    title: res.data.message,
                    showAnimationDuration: 300,
                    showEasing: Easing.bounce,
                    onHidden: () => console.log('Hidden'),
                    onPress: () => console.log('Press'),
                    hideOnPress: true,

                });
            }
        }).catch((error) => {
            console.log(error);
        });

    };

    const onBingoPressed = async (user_id: string, match_id: number) => {
        await getBingo(user_id, match_id).then((res: any) => {
            if (res.data.status == false) {

                Notifier.showNotification({
                    title: res.data.message,
                    showAnimationDuration: 300,
                    showEasing: Easing.bounce,
                    onHidden: () => console.log('Hidden'),
                    onPress: () => console.log('Press'),
                    hideOnPress: true,

                });
            } else {
                setIsDisabledBingo(true);
                Notifier.showNotification({
                    title: res.data.message,
                    showAnimationDuration: 300,
                    showEasing: Easing.bounce,
                    onHidden: () => console.log('Hidden'),
                    onPress: () => console.log('Press'),
                    hideOnPress: true,

                });
                navigation.navigate("EndGamePage" as never, { user_id } as never);
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>
                    <Text>Cartella numero: {cardNumber} </Text>
                </DataTable.Title>

            </DataTable.Header>

            {rows.map((row: any, i: number) =>
                <DataTable.Row key={i}>
                    {
                        row.map((value: number) => {

                            const style = extracted.has(value) ? {
                                backgroundColor: '#ff0000'
                            } : {}
                            return <DataTable.Cell style={{ ...style, justifyContent: "center" }} key={value} numeric>{value}</DataTable.Cell>
                        }
                        )
                    }
                </DataTable.Row>

            )}
            <TouchableOpacity
                onPress={async () => onCinquinaPressed(user_id, match_id)}
                style={styles.buttonCinquina}
                disabled={isDisabledCinquina}
            >
                <Text style={styles.buttonText}>Cinquina!</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={async () => onBingoPressed(user_id, match_id)}
                style={styles.buttonBingo}
                disabled={isDisabledBingo}
            >
                <Text style={styles.buttonText}>Bingo!</Text>
            </TouchableOpacity>
        </DataTable>
    )
}
const TEXT: TextStyle = {
    color: "black",
    textAlign: "center",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
        //paddingTop: Constants.statusBarHeight,
    },
    content: {
        paddingHorizontal: 30,
    },
    form: {
        marginBottom: 100,
    },
    buttonCinquina: {
        height: 30,
        borderRadius: 25,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 5,
        opacity: 1
    },
    buttonBingo: {
        height: 30,
        borderRadius: 25,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 5,
        opacity: 1
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
        fontSize: 20,
        lineHeight: 50,
        fontWeight: "bold",
    },
    userText: {
        ...TEXT,
        fontSize: 16,
        lineHeight: 30,
    },
});

