import "reflect-metadata";
import { createConnection, getConnectionManager } from "typeorm";

export const connectionManager = async () => {
    const hasConnection = getConnectionManager().has("default")
    if(hasConnection) {
        const getConnection = getConnectionManager().get('default')
        if(!getConnection.isConnected) {
            return await getConnection.connect();
        }
        return getConnection;
    }
    console.log("came downnn")
    const connection = await createConnection()
    return connection;
}