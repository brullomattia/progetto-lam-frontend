import { DataTable } from "react-native-paper";

const MatchesData = (matches: any) => {
    //console.log(matches);
    return (
        <>
            {
                matches.map((curMatch: any) => {
                    const { id, players, state } = curMatch;

                    return (
                        <DataTable.Row>
                            <DataTable.Cell>{id}</DataTable.Cell>
                            <DataTable.Cell>{players}</DataTable.Cell>
                            <DataTable.Cell>{state}</DataTable.Cell>
                        </DataTable.Row>
                    )
                })
            }

        </>
    )
}
export default MatchesData;