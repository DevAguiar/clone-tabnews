import "../styles/globals.css"; // 🔹 Agora sim o Next.js aceita o CSS global aqui!

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
