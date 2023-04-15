import {
    TouchableOpacity, Text, StyleSheet,
    TextStyle,
} from "react-native"
import { DataTable } from "react-native-paper"


export const Card = ({ onCinquinaPressed, onBingoPressed, card, cardNumber, extracted }: any) => {

    let rows: number[][] = [];
    for (let i = 0; i < 20; i += 5) {
        let row: number[] = card.slice(i, i + 5)
        rows.push(row);
    }

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
                            console.log("value", value, extracted as Set<number>);
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
                onPress={onCinquinaPressed}
                style={styles.buttonLogin}
            >
                <Text style={styles.buttonLoginText}>Cinquina!</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onBingoPressed}
                style={styles.buttonLogin}
            >
                <Text style={styles.buttonLoginText}>Bingo!</Text>
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
    buttonLogin: {
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
    buttonLoginText: {
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

