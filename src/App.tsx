import { useState, type FormEvent } from "react";
import "./App.css";

type Papel = {
  titulo: string;
  tarefas: string[];
};

type Integrante = {
  nome: string;
  resumo: string;
  papeis: Papel[];
};

const integrantes: Integrante[] = [
  {
    nome: "Marcela Carneiro Mateus",
    resumo: "Organiza o projeto do começo ao fim e mantém todo mundo alinhado.",
    papeis: [
      {
        titulo: "Gerente de Projetos / Scrum Master",
        tarefas: [
          "Organizar o cronograma e os prazos das entregas",
          "Distribuir e acompanhar as tarefas",
          "Conduzir as reuniões rápidas da equipe",
          "Acompanhar o quadro Kanban",
          "Identificar possíveis atrasos e impedimentos",
          "Acompanhar o cumprimento das demandas do cliente",
        ],
      },
    ],
  },
  {
    nome: "Nathália Rodrigues de Oliveira Silva",
    resumo: "Orienta as decisões técnicas e participa da execução do código.",
    papeis: [
      {
        titulo: "Líder Técnico / Especialista de Execução",
        tarefas: [
          "Definir, junto à equipe, as soluções técnicas",
          "Orientar a implementação dos projetos",
          "Verificar se as tecnologias utilizadas são adequadas",
          "Apoiar os demais integrantes em dificuldades técnicas",
          "Realizar testes durante o desenvolvimento",
          "Avaliar a integração entre as partes da solução",
        ],
      },
    ],
  },
  {
    nome: "Danyella Vinhal",
    resumo: "Garante que a solução funcione, siga as normas e esteja documentada.",
    papeis: [
      {
        titulo: "Analista de Qualidade (QA) e Normas",
        tarefas: [
          "Realizar testes e identificar erros",
          "Conferir se os requisitos do cliente foram atendidos",
          "Verificar padrões e boas práticas",
          "Registrar falhas e acompanhar as correções",
          "Aprovar a versão final junto à equipe",
        ],
      },
      {
        titulo: "Analista de Documentação e Compliance",
        tarefas: [
          "Registrar as etapas do desenvolvimento",
          "Organizar documentos, arquivos e versões",
          "Elaborar e atualizar manuais de utilização",
          "Organizar evidências e registros das entregas",
          "Auxiliar na preparação das apresentações dos projetos",
        ],
      },
    ],
  },
];

const valores = [
  { titulo: "Tecnologia", texto: "Ferramentas escolhidas para o problema do cliente, não o contrário." },
  { titulo: "Qualidade", texto: "Testes e revisão antes de qualquer entrega." },
  { titulo: "Praticidade", texto: "Soluções simples de usar, com manual atualizado." },
  { titulo: "Bons resultados", texto: "Cada projeto é medido pelo que resolve para quem contratou." },
];

const etapas = [
  { titulo: "Planejar", texto: "Prazos, tarefas e demandas do cliente organizados no quadro Kanban." },
  { titulo: "Desenvolver", texto: "Todas as integrantes participam da programação e das decisões técnicas." },
  { titulo: "Testar", texto: "Erros são registrados e corrigidos antes da entrega." },
  { titulo: "Documentar", texto: "Etapas, decisões e manuais ficam registrados e versionados." },
  { titulo: "Entregar", texto: "A versão final é aprovada em conjunto, com evidências da entrega." },
];

function classeAba(ativa: boolean) {
  if (ativa) {
    return "aba ativa";
  }
  return "aba";
}

export default function App() {
  const [selecionada, setSelecionada] = useState(0);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const pessoa = integrantes[selecionada];

  function enviar(e: FormEvent) {
    e.preventDefault();
    // Aqui você pode conectar a uma API ou serviço de e-mail no futuro.
    setEnviado(true);
    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <>
      <header className="topo">
        <a href="#inicio" className="marca" aria-label="DMN Tech, início">
          DMN<span>tech</span>
        </a>
        <nav aria-label="Principal">
          <a href="#sobre">Sobre</a>
          <a href="#equipe">Equipe</a>
          <a href="#processo">Como trabalhamos</a>
          <a href="#contato" className="botao pequeno">
            Fale conosco
          </a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-conteudo">
            <h1 className="hero-logo" aria-label="DMN Tech">
              <span className="hero-dmn">DMN</span>
              <span className="hero-tech">tech</span>
            </h1>
            <svg className="onda" viewBox="0 0 600 40" aria-hidden="true">
              <path d="M0 20 C 80 -10, 160 50, 260 20 S 440 -5, 600 22" />
            </svg>
            <p className="slogan">Conectando ideias, criando soluções.</p>
            <p className="hero-texto">
              Desenvolvemos soluções tecnológicas eficientes e inovadoras para atender às
              necessidades dos nossos clientes.
            </p>
            <div className="hero-acoes">
              <a href="#contato" className="botao">
                Fale conosco
              </a>
              <a href="#equipe" className="botao contorno">
                Conheça a equipe
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="secao">
          <div className="miolo">
            <h2>Soluções personalizadas, do jeito que o cliente precisa</h2>
            <p className="lead">
              Nossa missão é desenvolver soluções tecnológicas eficientes e inovadoras. Para isso,
              unimos quatro valores em todo projeto:
            </p>
            <ul className="valores">
              {valores.map((v) => (
                <li key={v.titulo}>
                  <h3>{v.titulo}</h3>
                  <p>{v.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="equipe" className="secao alt">
          <div className="miolo">
            <h2>Quem faz a DMN Tech acontecer</h2>
            <p className="lead">
              Cada integrante responde por uma área, mas ninguém trabalha isolada: todas participam
              da programação, dos testes e da documentação.
            </p>

            <div className="abas" role="tablist" aria-label="Integrantes da equipe">
              {integrantes.map((p, i) => (
                <button
                  key={p.nome}
                  role="tab"
                  aria-selected={i === selecionada}
                  className={classeAba(i === selecionada)}
                  onClick={() => setSelecionada(i)}
                >
                  {p.nome}
                </button>
              ))}
            </div>

            <div className="painel" role="tabpanel">
              <p className="resumo">{pessoa.resumo}</p>
              <div className="papeis">
                {pessoa.papeis.map((papel) => (
                  <article key={papel.titulo}>
                    <h3>{papel.titulo}</h3>
                    <ul>
                      {papel.tarefas.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="processo" className="secao">
          <div className="miolo">
            <h2>Como trabalhamos</h2>
            <p className="lead">
              Decisões importantes e entregas são sempre feitas em conjunto. O caminho de um projeto
              segue estas etapas:
            </p>
            <ol className="etapas">
              {etapas.map((e) => (
                <li key={e.titulo}>
                  <h3>{e.titulo}</h3>
                  <p>{e.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contato" className="secao contato">
          <div className="miolo estreito">
            <h2>Vamos conversar sobre o seu projeto?</h2>
            <p className="lead">Conte o que você precisa e a nossa equipe retorna com os próximos passos.</p>

            <form onSubmit={enviar}>
              <label>
                Nome
                <input value={nome} onChange={(e) => setNome(e.target.value)} required />
              </label>
              <label>
                E-mail
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </label>
              <label>
                Mensagem
                <textarea rows={5} value={mensagem} onChange={(e) => setMensagem(e.target.value)} required />
              </label>
              <button type="submit" className="botao">
                Enviar mensagem
              </button>
              {enviado && (
                <p className="aviso" role="status">
                  Mensagem enviada. Obrigada pelo contato!
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <strong>DMN Tech Soluções Tecnológicas Ltda.</strong>
        <span>Conectando ideias, criando soluções.</span>
      </footer>
    </>
  );
}
