// ===== CYBER_STOP - SERVIDOR BACK-END SIMULADO =====
// Desenvolvedor: Cyber_Stop Team
// Versão: 1.0.0
// Data: 2024

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ===== DADOS SIMULADOS =====

// Eventos e Campeonatos
const eventos = [
    {
        id: 1,
        titulo: "Campeonato CS2 - Cyber_Stop Cup",
        data: "2024-12-15",
        hora: "19:00",
        tipo: "campeonato",
        categoria: "FPS",
        premio: "R$ 500,00",
        descricao: "Torneio oficial de Counter-Strike 2 com premiação em dinheiro. Inscrições abertas para times de 5 jogadores.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
        inscritos: 24,
        maxInscritos: 32,
        status: "inscricoes_abertas"
    },
    {
        id: 2,
        titulo: "Torneio Valorant - Riot Games",
        data: "2024-12-22",
        hora: "20:00",
        tipo: "campeonato",
        categoria: "FPS",
        premio: "R$ 300,00",
        descricao: "Campeonato oficial de Valorant com suporte da Riot Games. Premiação para os 3 primeiros colocados.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
        inscritos: 18,
        maxInscritos: 24,
        status: "inscricoes_abertas"
    },
    {
        id: 3,
        titulo: "Festa de Fim de Ano Gaming",
        data: "2024-12-29",
        hora: "22:00",
        tipo: "evento",
        categoria: "social",
        premio: "Brindes e Prêmios",
        descricao: "Celebração de fim de ano com gaming, música, comida e muita diversão. Open bar para maiores de 18 anos.",
        imagem: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=400&h=300&fit=crop",
        inscritos: 45,
        maxInscritos: 100,
        status: "inscricoes_abertas"
    },
    {
        id: 4,
        titulo: "Lançamento GTA VI - Maratona",
        data: "2025-01-05",
        hora: "00:01",
        tipo: "lançamento",
        categoria: "RPG",
        premio: "Prêmios Especiais",
        descricao: "Maratona de lançamento do GTA VI. Primeiros 50 jogadores ganham brindes exclusivos da Rockstar Games.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
        inscritos: 67,
        maxInscritos: 100,
        status: "inscricoes_abertas"
    },
    {
        id: 5,
        titulo: "Torneio FIFA 25 - Copa Cyber_Stop",
        data: "2025-01-12",
        hora: "15:00",
        tipo: "campeonato",
        categoria: "Esporte",
        premio: "R$ 200,00",
        descricao: "Campeonato de FIFA 25 com sistema eliminatório. Inscrições individuais, premiação para os 3 primeiros.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
        inscritos: 32,
        maxInscritos: 64,
        status: "inscricoes_abertas"
    },
    {
        id: 6,
        titulo: "Hackathon Game Dev",
        data: "2025-01-19",
        hora: "09:00",
        tipo: "hackathon",
        categoria: "Desenvolvimento",
        premio: "R$ 1.000,00",
        descricao: "Hackathon de 24 horas para desenvolvimento de jogos. Equipes de até 4 pessoas. Premiação para os melhores projetos.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
        inscritos: 12,
        maxInscritos: 20,
        status: "inscricoes_abertas"
    },
    {
        id: 7,
        titulo: "Cosplay Contest - Cyberpunk Edition",
        data: "2025-01-26",
        hora: "16:00",
        tipo: "concurso",
        categoria: "Cosplay",
        premio: "R$ 400,00",
        descricao: "Concurso de cosplay com tema cyberpunk. Categorias: Melhor Cosplay, Melhor Performance, Melhor Técnica.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
        inscritos: 28,
        maxInscritos: 50,
        status: "inscricoes_abertas"
    }
];

// Jogos Disponíveis
const jogos = [
    {
        id: 1,
        nome: "Counter-Strike 2",
        genero: "FPS",
        plataforma: "PC",
        requisitos: {
            cpu: "Intel Core i5-750",
            ram: "8 GB",
            gpu: "GTX 970",
            armazenamento: "85 GB"
        },
        descricao: "O mais recente jogo da franquia Counter-Strike com gráficos aprimorados e novas mecânicas.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop",
        tags: ["FPS", "Competitivo", "Multiplayer"],
        popularidade: 95,
        disponivel: true
    },
    {
        id: 2,
        nome: "Valorant",
        genero: "FPS",
        plataforma: "PC",
        requisitos: {
            cpu: "Intel Core i3-370M",
            ram: "4 GB",
            gpu: "Intel HD 3000",
            armazenamento: "23 GB"
        },
        descricao: "FPS tático 5v5 com agentes únicos e habilidades especiais.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop",
        tags: ["FPS", "Tático", "Free-to-Play"],
        popularidade: 88,
        disponivel: true
    },
    {
        id: 3,
        nome: "League of Legends",
        genero: "MOBA",
        plataforma: "PC",
        requisitos: {
            cpu: "Intel Core i3-530",
            ram: "2 GB",
            gpu: "GeForce 9600 GT",
            armazenamento: "12 GB"
        },
        descricao: "MOBA mais popular do mundo com mais de 150 campeões únicos.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop",
        tags: ["MOBA", "Estratégia", "Competitivo"],
        popularidade: 92,
        disponivel: true
    },
    {
        id: 4,
        nome: "Fortnite",
        genero: "Battle Royale",
        plataforma: "PC",
        requisitos: {
            cpu: "Intel Core i5-7300U",
            ram: "8 GB",
            gpu: "Intel HD 4000",
            armazenamento: "26 GB"
        },
        descricao: "Battle royale com construção e eventos especiais constantes.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop",
        tags: ["Battle Royale", "Construção", "Free-to-Play"],
        popularidade: 85,
        disponivel: true
    },
    {
        id: 5,
        nome: "GTA V",
        genero: "Ação/Aventura",
        plataforma: "PC",
        requisitos: {
            cpu: "Intel Core i5-3470",
            ram: "8 GB",
            gpu: "GTX 660",
            armazenamento: "72 GB"
        },
        descricao: "Mundo aberto com história envolvente e modo online massivo.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop",
        tags: ["Mundo Aberto", "Ação", "Online"],
        popularidade: 90,
        disponivel: true
    },
    {
        id: 6,
        nome: "Minecraft",
        genero: "Sandbox",
        plataforma: "PC",
        requisitos: {
            cpu: "Intel Core i3-3210",
            ram: "4 GB",
            gpu: "Intel HD Graphics 4000",
            armazenamento: "1 GB"
        },
        descricao: "Jogo de construção e sobrevivência com infinitas possibilidades.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop",
        tags: ["Sandbox", "Construção", "Criatividade"],
        popularidade: 87,
        disponivel: true
    },
    {
        id: 7,
        nome: "FIFA 24",
        genero: "Esporte",
        plataforma: "PS5",
        requisitos: {
            cpu: "N/A",
            ram: "N/A",
            gpu: "N/A",
            armazenamento: "100 GB"
        },
        descricao: "Simulador de futebol mais realista com gráficos de nova geração.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop",
        tags: ["Esporte", "Futebol", "Simulador"],
        popularidade: 82,
        disponivel: true
    },
    {
        id: 8,
        nome: "God of War Ragnarök",
        genero: "Ação/Aventura",
        plataforma: "PS5",
        requisitos: {
            cpu: "N/A",
            ram: "N/A",
            gpu: "N/A",
            armazenamento: "120 GB"
        },
        descricao: "Epic saga nórdica com Kratos e Atreus em busca de respostas.",
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop",
        tags: ["Ação", "Aventura", "História"],
        popularidade: 94,
        disponivel: true
    }
];

// Ranking de Jogadores
const ranking = [
    {
        id: 1,
        nome: "CyberNinja",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
        horasJogadas: 2847,
        nivel: "Lendário",
        pontos: 15420,
        jogosFavoritos: ["CS2", "Valorant", "LoL"],
        ultimaAtividade: "2024-12-01T15:30:00Z"
    },
    {
        id: 2,
        nome: "PixelWarrior",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        horasJogadas: 2654,
        nivel: "Mestre",
        pontos: 14230,
        jogosFavoritos: ["Fortnite", "GTA V", "Minecraft"],
        ultimaAtividade: "2024-12-01T14:15:00Z"
    },
    {
        id: 3,
        nome: "GameMaster",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        horasJogadas: 2432,
        nivel: "Mestre",
        pontos: 12890,
        jogosFavoritos: ["LoL", "CS2", "FIFA 24"],
        ultimaAtividade: "2024-12-01T13:45:00Z"
    },
    {
        id: 4,
        nome: "DigitalDragon",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        horasJogadas: 2187,
        nivel: "Veterano",
        pontos: 11560,
        jogosFavoritos: ["Valorant", "God of War", "Spider-Man"],
        ultimaAtividade: "2024-12-01T12:30:00Z"
    },
    {
        id: 5,
        nome: "NeonKnight",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        horasJogadas: 1954,
        nivel: "Veterano",
        pontos: 10240,
        jogosFavoritos: ["CS2", "Fortnite", "GTA V"],
        ultimaAtividade: "2024-12-01T11:20:00Z"
    },
    {
        id: 6,
        nome: "CyberQueen",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        horasJogadas: 1876,
        nivel: "Veterano",
        pontos: 9870,
        jogosFavoritos: ["LoL", "Valorant", "Minecraft"],
        ultimaAtividade: "2024-12-01T10:45:00Z"
    },
    {
        id: 7,
        nome: "PixelPirate",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        horasJogadas: 1723,
        nivel: "Experiente",
        pontos: 8950,
        jogosFavoritos: ["FIFA 24", "God of War", "Spider-Man"],
        ultimaAtividade: "2024-12-01T09:30:00Z"
    },
    {
        id: 8,
        nome: "GameWizard",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
        horasJogadas: 1589,
        nivel: "Experiente",
        pontos: 8230,
        jogosFavoritos: ["CS2", "LoL", "Fortnite"],
        ultimaAtividade: "2024-12-01T08:15:00Z"
    },
    {
        id: 9,
        nome: "CyberSage",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        horasJogadas: 1456,
        nivel: "Experiente",
        pontos: 7540,
        jogosFavoritos: ["Valorant", "GTA V", "Minecraft"],
        ultimaAtividade: "2024-12-01T07:45:00Z"
    },
    {
        id: 10,
        nome: "DigitalDemon",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        horasJogadas: 1321,
        nivel: "Iniciante",
        pontos: 6870,
        jogosFavoritos: ["Fortnite", "FIFA 24", "God of War"],
        ultimaAtividade: "2024-12-01T06:30:00Z"
    }
];

// Cupons de Desconto
const cupons = [
    {
        id: "WELCOME2024",
        codigo: "WELCOME2024",
        desconto: 20,
        tipo: "percentual",
        minimo: 50,
        maximo: 100,
        validade: "2024-12-31",
        usoMaximo: 1,
        usosAtuais: 0,
        ativo: true,
        descricao: "Desconto de boas-vindas para novos clientes"
    },
    {
        id: "GAMER50",
        codigo: "GAMER50",
        desconto: 50,
        tipo: "percentual",
        minimo: 100,
        maximo: 200,
        validade: "2024-12-15",
        usoMaximo: 100,
        usosAtuais: 45,
        ativo: true,
        descricao: "Desconto especial para gamers"
    },
    {
        id: "WEEKEND25",
        codigo: "WEEKEND25",
        desconto: 25,
        tipo: "percentual",
        minimo: 30,
        maximo: 75,
        validade: "2024-12-08",
        usoMaximo: 200,
        usosAtuais: 123,
        ativo: true,
        descricao: "Desconto de fim de semana"
    },
    {
        id: "VIP100",
        codigo: "VIP100",
        desconto: 100,
        tipo: "reais",
        minimo: 200,
        maximo: 100,
        validade: "2024-12-20",
        usoMaximo: 50,
        usosAtuais: 12,
        ativo: true,
        descricao: "Cupom VIP para clientes premium"
    }
];

// Usuários (dados fictícios)
const usuarios = [
    {
        id: 1,
        nome: "João Silva",
        email: "joao@email.com",
        telefone: "(41) 99999-9999",
        plano: "gold",
        pontos: 1250,
        horasJogadas: 156,
        reservas: [
            {
                id: 1,
                data: "2024-12-01",
                hora: "14:00",
                duracao: 2,
                maquina: "PC-15",
                status: "concluida"
            }
        ],
        inscricoes: [1, 3],
        ultimaAtividade: "2024-12-01T15:30:00Z"
    }
];

// ===== ROTAS DA API =====

// Rota principal
app.get('/', (req, res) => {
    res.json({
        mensagem: "🎮 Cyber_Stop API - Lan House 100% Automatizada",
        versao: "1.0.0",
        status: "online",
        timestamp: new Date().toISOString()
    });
});

// Rota de eventos
app.get('/api/eventos', (req, res) => {
    try {
        const { tipo, categoria, status } = req.query;
        let eventosFiltrados = [...eventos];
        
        // Filtros
        if (tipo) {
            eventosFiltrados = eventosFiltrados.filter(e => e.tipo === tipo);
        }
        if (categoria) {
            eventosFiltrados = eventosFiltrados.filter(e => e.categoria === categoria);
        }
        if (status) {
            eventosFiltrados = eventosFiltrados.filter(e => e.status === status);
        }
        
        res.json({
            sucesso: true,
            total: eventosFiltrados.length,
            eventos: eventosFiltrados
        });
    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor",
            detalhes: error.message
        });
    }
});

// Rota de evento específico
app.get('/api/eventos/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const evento = eventos.find(e => e.id === id);
        
        if (!evento) {
            return res.status(404).json({
                sucesso: false,
                erro: "Evento não encontrado"
            });
        }
        
        res.json({
            sucesso: true,
            evento: evento
        });
    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor",
            detalhes: error.message
        });
    }
});

// Rota de jogos
app.get('/api/jogos', (req, res) => {
    try {
        const { genero, plataforma, disponivel } = req.query;
        let jogosFiltrados = [...jogos];
        
        // Filtros
        if (genero) {
            jogosFiltrados = jogosFiltrados.filter(j => j.genero === genero);
        }
        if (plataforma) {
            jogosFiltrados = jogosFiltrados.filter(j => j.plataforma === plataforma);
        }
        if (disponivel !== undefined) {
            jogosFiltrados = jogosFiltrados.filter(j => j.disponivel === (disponivel === 'true'));
        }
        
        res.json({
            sucesso: true,
            total: jogosFiltrados.length,
            jogos: jogosFiltrados
        });
    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor",
            detalhes: error.message
        });
    }
});

// Rota de jogo específico
app.get('/api/jogos/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const jogo = jogos.find(j => j.id === id);
        
        if (!jogo) {
            return res.status(404).json({
                sucesso: false,
                erro: "Jogo não encontrado"
            });
        }
        
        res.json({
            sucesso: true,
            jogo: jogo
        });
    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor",
            detalhes: error.message
        });
    }
});

// Rota de ranking
app.get('/api/ranking', (req, res) => {
    try {
        const { limite = 10, nivel } = req.query;
        let rankingFiltrado = [...ranking];
        
        // Filtrar por nível se especificado
        if (nivel) {
            rankingFiltrado = rankingFiltrado.filter(r => r.nivel === nivel);
        }
        
        // Ordenar por pontos e limitar
        rankingFiltrado.sort((a, b) => b.pontos - a.pontos);
        rankingFiltrado = rankingFiltrado.slice(0, parseInt(limite));
        
        res.json({
            sucesso: true,
            total: rankingFiltrado.length,
            ranking: rankingFiltrado
        });
    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor",
            detalhes: error.message
        });
    }
});

// Rota de cupons
app.get('/api/cupons', (req, res) => {
    try {
        const { ativo, codigo } = req.query;
        let cuponsFiltrados = [...cupons];
        
        // Filtros
        if (ativo !== undefined) {
            cuponsFiltrados = cuponsFiltrados.filter(c => c.ativo === (ativo === 'true'));
        }
        if (codigo) {
            cuponsFiltrados = cuponsFiltrados.filter(c => c.codigo === codigo);
        }
        
        res.json({
            sucesso: true,
            total: cuponsFiltrados.length,
            cupons: cuponsFiltrados
        });
    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor",
            detalhes: error.message
        });
    }
});

// Rota de usuário
app.get('/api/usuario/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const usuario = usuarios.find(u => u.id === id);
        
        if (!usuario) {
            return res.status(404).json({
                sucesso: false,
                erro: "Usuário não encontrado"
            });
        }
        
        res.json({
            sucesso: true,
            usuario: usuario
        });
    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor",
            detalhes: error.message
        });
    }
});

// Rota de reservas
app.post('/api/reservas', (req, res) => {
    try {
        const { usuarioId, data, hora, duracao, maquina } = req.body;
        
        // Validações básicas
        if (!usuarioId || !data || !hora || !duracao || !maquina) {
            return res.status(400).json({
                sucesso: false,
                erro: "Todos os campos são obrigatórios"
            });
        }
        
        // Simular criação de reserva
        const novaReserva = {
            id: Date.now(),
            usuarioId: parseInt(usuarioId),
            data,
            hora,
            duracao: parseInt(duracao),
            maquina,
            status: "confirmada",
            criadaEm: new Date().toISOString()
        };
        
        res.status(201).json({
            sucesso: true,
            mensagem: "Reserva criada com sucesso",
            reserva: novaReserva
        });
    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor",
            detalhes: error.message
        });
    }
});

// Rota de inscrição em eventos
app.post('/api/eventos/:id/inscricao', (req, res) => {
    try {
        const eventoId = parseInt(req.params.id);
        const { usuarioId } = req.body;
        
        const evento = eventos.find(e => e.id === eventoId);
        if (!evento) {
            return res.status(404).json({
                sucesso: false,
                erro: "Evento não encontrado"
            });
        }
        
        if (evento.inscritos >= evento.maxInscritos) {
            return res.status(400).json({
                sucesso: false,
                erro: "Evento lotado"
            });
        }
        
        // Simular inscrição
        evento.inscritos++;
        
        res.json({
            sucesso: true,
            mensagem: "Inscrição realizada com sucesso",
            evento: evento
        });
    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor",
            detalhes: error.message
        });
    }
});

// Rota de validação de cupom
app.post('/api/cupons/validar', (req, res) => {
    try {
        const { codigo, valorCompra } = req.body;
        
        const cupom = cupons.find(c => c.codigo === codigo && c.ativo);
        if (!cupom) {
            return res.status(400).json({
                sucesso: false,
                erro: "Cupom inválido ou inativo"
            });
        }
        
        if (valorCompra < cupom.minimo) {
            return res.status(400).json({
                sucesso: false,
                erro: `Valor mínimo para este cupom: R$ ${cupom.minimo.toFixed(2)}`
            });
        }
        
        if (cupom.usosAtuais >= cupom.usoMaximo) {
            return res.status(400).json({
                sucesso: false,
                erro: "Cupom esgotado"
            });
        }
        
        const dataValidade = new Date(cupom.validade);
        if (dataValidade < new Date()) {
            return res.status(400).json({
                sucesso: false,
                erro: "Cupom expirado"
            });
        }
        
        // Calcular desconto
        let descontoValor = 0;
        if (cupom.tipo === 'percentual') {
            descontoValor = (valorCompra * cupom.desconto) / 100;
            if (descontoValor > cupom.maximo) {
                descontoValor = cupom.maximo;
            }
        } else {
            descontoValor = cupom.desconto;
        }
        
        res.json({
            sucesso: true,
            cupom: cupom,
            desconto: descontoValor,
            valorFinal: valorCompra - descontoValor
        });
    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor",
            detalhes: error.message
        });
    }
});

// Rota de estatísticas
app.get('/api/stats', (req, res) => {
    try {
        const totalEventos = eventos.length;
        const totalJogos = jogos.length;
        const totalUsuarios = usuarios.length;
        const totalCupons = cupons.length;
        
        const eventosAtivos = eventos.filter(e => e.status === 'inscricoes_abertas').length;
        const jogosDisponiveis = jogos.filter(j => j.disponivel).length;
        const cuponsAtivos = cupons.filter(c => c.ativo).length;
        
        res.json({
            sucesso: true,
            estatisticas: {
                totalEventos,
                eventosAtivos,
                totalJogos,
                jogosDisponiveis,
                totalUsuarios,
                totalCupons,
                cuponsAtivos,
                timestamp: new Date().toISOString()
            }
        });
    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor",
            detalhes: error.message
        });
    }
});

// Rota de busca
app.get('/api/busca', (req, res) => {
    try {
        const { q } = req.query;
        
        if (!q || q.length < 2) {
            return res.status(400).json({
                sucesso: false,
                erro: "Termo de busca deve ter pelo menos 2 caracteres"
            });
        }
        
        const termo = q.toLowerCase();
        const resultados = {
            eventos: eventos.filter(e => 
                e.titulo.toLowerCase().includes(termo) || 
                e.descricao.toLowerCase().includes(termo)
            ),
            jogos: jogos.filter(j => 
                j.nome.toLowerCase().includes(termo) || 
                j.genero.toLowerCase().includes(termo) ||
                j.tags.some(tag => tag.toLowerCase().includes(termo))
            )
        };
        
        res.json({
            sucesso: true,
            termo: q,
            total: resultados.eventos.length + resultados.jogos.length,
            resultados: resultados
        });
    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor",
            detalhes: error.message
        });
    }
});

// ===== MIDDLEWARE DE ERRO =====
app.use((err, req, res, next) => {
    console.error('Erro:', err);
    res.status(500).json({
        sucesso: false,
        erro: "Erro interno do servidor",
        detalhes: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Rota 404
app.use('*', (req, res) => {
    res.status(404).json({
        sucesso: false,
        erro: "Rota não encontrada",
        rota: req.originalUrl
    });
});

// ===== INICIAR SERVIDOR =====
app.listen(PORT, () => {
    console.log('🚀 Cyber_Stop Server iniciado!');
    console.log(`📍 Servidor rodando em: http://localhost:${PORT}`);
    console.log(`📊 API disponível em: http://localhost:${PORT}/api`);
    console.log(`🎮 Total de eventos: ${eventos.length}`);
    console.log(`🎯 Total de jogos: ${jogos.length}`);
    console.log(`🏆 Total de jogadores no ranking: ${ranking.length}`);
    console.log(`🎫 Total de cupons: ${cupons.length}`);
    console.log('✅ Servidor pronto para receber requisições!');
});

// ===== EXPORTAR PARA TESTES =====
module.exports = app;
