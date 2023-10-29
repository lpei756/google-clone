import App, {AppProps} from 'next/app';
import SEO from '../../next-seo.config.json';
import {DefaultSeo} from "next-seo";


// styles
import '@/globals.css';
import Head from "next/head";
import {Provider} from "react-redux";

export default function MyApp({Component, pageProps}: AppProps) {

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    )

}