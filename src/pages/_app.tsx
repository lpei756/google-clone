import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script src="https://cse.google.com/cse.js?cx=e2797d1cfb2c9452b" strategy="afterInteractive" />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
