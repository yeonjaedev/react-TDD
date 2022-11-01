interface ErrorProps {
    message: string;
}
const ErrorBanner = ({message}: ErrorProps) => {
    const msg = message ?? "에러 발생";
    return (
        <div data-testid="error-banner" style={{backgroundColor: "red", color: "white"}}>
            {msg}
        </div>
    );
};
export default ErrorBanner;
