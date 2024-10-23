import React, {useState} from 'react';
import { motion } from 'framer-motion';
import {
    Banana,
    Sun,
     Cloud, Cat, Lightbulb, Smile, Heart,
} from 'lucide-react';

import bananachill from './assets/bananachill.webp';
import bananaboss from './assets/bananaboss.webp';
import bananathlete from './assets/bananathlete.webp';
import logo from './assets/logo.jpg';
import last from './assets/last.jpg';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-white to-gray-200">
            {/* Header */}
            <header className="bg-green-600 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="flex items-center space-x-2">
                        <Banana size={32} />
                        <h1 className="text-2xl font-bold">Bananamalis</h1>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <motion.section
                id="home"
                className="py-20 flex items-center"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                <div className="container mx-auto text-center text-white flex flex-col items-center">
                    <motion.img
                        src={logo}
                        alt="Logo Bananamalis"
                        className="h-80 w-auto mb-8" // Ajustez la hauteur comme nécessaire
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.5}}
                    />
                    <motion.h2
                        className="text-5xl text-black font-bold mb-4"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.5}}
                    >
                        Créez Votre Propre Paradis de Bananes
                    </motion.h2>
                    <motion.p
                        className="text-xl text-black mb-8"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1}}
                    >
                        Découvrez le plaisir de cultiver des bananiers exotiques directement chez vous !
                    </motion.p>
                    <motion.a
                        href="#products"
                        className="bg-yellow-400 text-green-800 py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-300 transition"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                    >
                        Découvrez nos Bananastiques
                    </motion.a>
                </div>
            </motion.section>

            {/* Features */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.5}}
                    >
                        Pourquoi Choisir Bananamalis ?
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Cat className="text-green-500" size={40}/>}
                            title="Parce que les chats, c’est trop mainstream."
                            description="Tout le monde a un chat ou un chien, mais combien de personnes peuvent se vanter d’avoir un bananier comme animal de compagnie ? Avec Bananamalis, tu seras l’élu(e) de ton quartier, et ton bananier ne miaulera jamais à 3h du matin."
                        />
                        <FeatureCard
                            icon={<Sun className="text-yellow-500" size={40}/>}
                            title="Parce que les bananes, c’est la vie."
                            description="Pourquoi choisir un animal qui te coûtera des croquettes et te volera ton lit, quand tu peux adopter un bananier qui te fournira des collations saines et te rafraîchira en été ?"
                        />
                        <FeatureCard
                            icon={<Cloud className="text-blue-500" size={40} />}
                            title="Un bananier, c’est zéro stress."
                            description="Tu n’auras pas besoin de l’emmener chez le vétérinaire, il n’a pas besoin de promenades, et il ne renversera jamais ton verre de vin préféré. Bref, le compagnon idéal pour les flemmards professionnels."
                        />
                        <FeatureCard
                            icon={<Lightbulb className="text-green-500" size={40} />}
                            title="Il te donne des conseils de vie (en silence)"
                            description="Les bananiers sont connus pour leur sagesse ancestrale. Ils te regardent avec sérénité et t’inspirent à vivre la vie avec calme et élégance. Ils ne parlent pas, mais c’est justement pour ça qu’on les adore."
                        />
                        <FeatureCard
                            icon={<Heart className="text-yellow-500" size={40} />}
                            title="Parce que les bananiers ne jugent pas."
                            description="Peu importe si tu es en pyjama toute la journée ou si tu ne t’es pas coiffé(e) depuis trois jours, ton bananier t’accepte tel(le) que tu es. Pas de jugement, juste de l’ombre bienveillante."
                        />
                        <FeatureCard
                            icon={<Smile className="text-blue-500" size={40} />}
                            title="Parce qu’avec Bananamalis, c’est la banane tous les jours !"
                            description="Nous garantissons un sourire quotidien à chaque fois que tu croiseras ton bananier. Entre son charme tropical et ses bananes qui pendouillent comme des cadeaux du ciel, tu ne pourras pas t’empêcher d’avoir la banane."
                        />
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <motion.section
                id="products"
                className="py-16 bg-green-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Nos Bananastiques en Vedette
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ProductCard
                            image={bananachill}
                            title="Banana Chill"
                            description="Ce bananier est le roi de la détente. Il adore le soleil, les siestes à l’ombre, et ne se stresse jamais. Il est parfait pour les jardins zen où la relaxation est la priorité."
                            characteristics="Feuilles extra-larges pour créer de l’ombre idéale pour des après-midis paresseux."
                            bonus="Livré avec un hamac miniature pour que tu puisses rêver de vacances ensemble."
                        />
                        <ProductCard
                            image={bananaboss}
                            title="Banana Boss"
                            description="Toujours droit, toujours prêt à dominer. Ce bananier inspire le leadership et le succès. Parfait pour ton jardin ou ton balcon, il boostera tes ambitions !"
                            characteristics="Feuilles ultra-polies, jamais froissées. Tient debout comme un patron, même contre les tempêtes."
                            bonus="Il envoie des e-mails de motivation tous les lundis matin (virtuellement bien sûr !)."
                        />
                        <ProductCard
                            image={bananathlete}
                            title="Banana Athlete"
                            description="Ce bananier ne reste pas inactif. Il s’entraîne tous les jours pour pousser toujours plus haut. Parfait pour les amateurs de fitness ou les fans de plantes robustes."
                            characteristics="Résistant aux intempéries, il pousse à une vitesse incroyable, défiant même les records botaniques."
                            bonus="Fournit des bananes riches en protéines pour des shakes post-entraînement."
                        />
                    </div>
                </div>
            </motion.section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                src={last}
                                alt="Banana plantation"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <motion.h2
                                className="text-3xl font-bold mb-4"
                                initial={{opacity: 0, x: -50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.5}}
                            >
                                À Propos de Bananamalis
                            </motion.h2>
                            <p className="text-gray-700 mb-6">
                                Bienvenue chez Bananamalis, l'endroit où le tropical vient se frotter à votre jardin !
                                Vous rêvez d’exotisme, mais sans devoir prendre un vol en classe éco ? Ne cherchez plus
                                ! Nous avons le remède parfait : des bananiers si juteux qu’ils pourraient vous faire
                                oublier les plages de sable fin.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Ici, notre mission est simple : transformer votre jardin en une jungle urbaine digne
                                d'un film d’aventure. Peu importe si vous êtes un expert du jardinage ou si votre plus
                                grande prouesse est de ne pas faire mourir votre cactus, nos bananiers sont là pour
                                vous. Et promis, ils ne nécessitent pas de passeport !
                            </p>
                            <p className="text-gray-700 mb-6">
                                Tous nos bananiers poussent sous le regard bienveillant (et légèrement jaloux) de ma serre personnelle. Oui, vous avez bien entendu, je les bichonne comme un parent poule ! Chaque arbre reçoit une dose d'amour et d'attentions particulières avant de faire le grand saut vers votre jardin. Attendez-vous à des variétés si robustes et éclatantes que même les palmiers seront jaloux ! Alors, prêts à faire entrer un peu de soleil dans votre vie ? 🌞🍌
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <motion.section
                id="contact"
                className="py-16 bg-green-600 text-white"
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Contactez-Nous</h2>
                    <div className="max-w-2xl mx-auto">
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Votre Nom"
                                className="w-full px-4 py-2 rounded-md text-gray-800"
                            />
                            <input
                                type="email"
                                placeholder="Votre Email"
                                className="w-full px-4 py-2 rounded-md text-gray-800"
                            />
                            <textarea
                                placeholder="Votre Message"
                                rows={4}
                                className="w-full px-4 py-2 rounded-md text-gray-800"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-yellow-400 text-green-800 py-2 px-6 rounded-md hover:bg-yellow-300 transition"
                            >
                                Envoyer le Message
                            </button>
                        </form>
                    </div>
                </div>
            </motion.section>

            {/* Footer */}
            <footer className="bg-green-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-semibold mb-2">Bananamalis</h3>
                            <p>Apportez un paradis tropical à votre porte</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-sm">
                        &copy; 2024 Bananamalis. Tous droits réservés.
                    </div>
                </div>
            </footer>
        </div>
    );
};

const FeatureCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
}> = ({ icon, title, description }) => (
    <motion.div
        className="bg-green-50 p-6 rounded-lg shadow-md text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const ProductCard: React.FC<{
    image: string;
    title: string;
    description: string;
    characteristics: string;
    bonus: string;
}> = ({ image, title, description, characteristics, bonus }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <motion.div
                className="bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ maxHeight: '600px' }} // Ajustement de la hauteur maximale de la carte
            >
                <img src={image} alt={title} className="w-full h-80 object-cover" /> {/* Augmenter la hauteur de l'image */}
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="flex justify-center items-center">
                        <motion.button
                            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleModal}
                        >
                            En savoir plus
                        </motion.button>
                    </div>
                </div>
            </motion.div>
            {isOpen && (
                <Modal
                    onClose={toggleModal}
                    image={image}
                    title={title}
                    description={description}
                    characteristics={characteristics}
                    bonus={bonus}
                />
            )}
        </>
    );
};

const Modal: React.FC<{
    onClose: () => void;
    image: string;
    title: string;
    description: string;
    characteristics: string;
    bonus: string;
}> = ({ onClose, image, title, description, characteristics, bonus }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
                <button className="absolute top-4 right-4" onClick={onClose}>
                    <span className="text-gray-500">&times;</span>
                </button>
                <img src={image} alt={title} className="w-full h-80 object-cover mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Caractéristiques</h4>
                    <p className="text-gray-600">{characteristics}</p>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Bonus</h4>
                    <p className="text-gray-600">{bonus}</p>
                </div>
                <button
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
                    onClick={onClose}
                >
                    Fermer
                </button>
            </div>
        </div>
    );
};

export default App;