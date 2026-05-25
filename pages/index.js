"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function EmConstrucao() {
  const [entrou, setEntrou] = useState(false);
  const audioRef = useRef(null);

  // Função disparada no clique do usuário para iniciar o site com som
  const entrarNoSite = () => {
    setEntrou(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // 🚨 Define o volume em 40% (vai de 0.0 a 1.0)
      audioRef.current.play().catch((err) => console.log(err));
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "#111827", // Fundo escuro fosco elegante (Tailwind gray-900)
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        color: "white",
        padding: "20px",
      }}
    >
      {/* TAG DE ÁUDIO OCULTA */}
      <video
        ref={audioRef}
        src="/musica.mp4"
        loop
        style={{ display: "none" }}
      />

      {/* TELA 1: BOTÃO DE BOAS-VINDAS (Para liberar o áudio no navegador) */}
      {!entrou ? (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "20px" }}>Bem-vindo ao nosso projeto</h2>
          <button
            onClick={entrarNoSite}
            style={{
              padding: "15px 40px",
              fontSize: "1.1rem",
              backgroundColor: "#3b82f6", // Azul moderno
              color: "white",
              border: "none",
              borderRadius: "50px", // Totalmente arredondado estilo pílula
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0px 4px 15px rgba(59, 130, 246, 0.4)",
            }}
          >
            🚀 Entrar na Página
          </button>
        </div>
      ) : (
        /* TELA 2: PÁGINA EM CONSTRUÇÃO REAL */
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* IMAGEM CENTRALIZADA, QUADRADA E ARREDONDADA */}
          <div
            style={{
              position: "relative",
              width: "250px", // Largura controlável (tamanho médio perfeito)
              height: "250px", // Altura idêntica para manter o quadrado perfeito
              marginBottom: "25px",
              overflow: "hidden", // Garante que a imagem respeite as bordas do contêiner
              borderRadius: "20px", // Bordas arredondadas pedidas
              boxShadow: "0px 10px 30px rgba(0,0,0,0.5)", // Sombra para desgrudar do fundo
            }}
          >
            <Image
              src="/fundo.jpg" // Sua imagem dentro da pasta public/
              alt="Logo ou Imagem do Projeto"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <h1 style={{ fontSize: "2.5rem", margin: "10px 0" }}>
            🚧 Em Construção
          </h1>
          <p
            style={{ fontSize: "1.1rem", color: "#9ca3af", maxWidth: "400px" }}
          >
            Estamos preparando algo incrível por aqui. Sente-se e aproveite a
            música de fundo!
          </p>

          {/* 🚨 NOVO BOTÃO DE CONTROLE DENTRO DA TELA EM CONSTRUÇÃO */}
          <button
            onClick={() => {
              if (audioRef.current.paused) {
                audioRef.current.play();
              } else {
                audioRef.current.pause();
              }
            }}
            style={{
              padding: "10px 20px",
              fontSize: "0.9rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Botão transparente elegante
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.2s",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
            }
          >
            🎵 Play / Pause Música
          </button>
        </main>
      )}
    </div>
  );
}
