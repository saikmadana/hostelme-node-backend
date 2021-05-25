export const getErrorMessage = (err: any) => {
    if(err instanceof Error) {
        return err.message;
    }
    return err;
}