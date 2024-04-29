import { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

export default function App() {
	const [emojis, setEmojis] = useState([{ id: uuid(), emoji: ' ' }]);

	const addHappyEmoji = () => {
		setEmojis(currentEmojis => [...currentEmojis, { id: uuid(), emoji: '😀' }]);
	};

	const addSadEmoji = () => {
		setEmojis(currentEmojis => [...currentEmojis, { id: uuid(), emoji: '😟' }]);
	};

	const addAngryEmoji = () => {
		setEmojis(currentEmojis => [...currentEmojis, { id: uuid(), emoji: '😡' }]);
	};

	const clearEmoji = () => {
		setEmojis([]);
	};

	const deleteEmoji = id => {
		setEmojis(currentEmojis => {
			return currentEmojis.filter(e => e.id !== id);
		});
	};

	const allHeartEmoji = () => {
		setEmojis(currentEmojis => {
			return currentEmojis.map(e => {
				return { ...e, emoji: '❤️' };
			});
		});
	};

	return (
		<div className="emoji-container">
			<div>
				<button className="emoji-btn" onClick={addHappyEmoji}>
					Add Happy Emoji
				</button>
				<button className="emoji-btn" onClick={addSadEmoji}>
					Add Sad Emoji
				</button>
				<button className="emoji-btn" onClick={addAngryEmoji}>
					Add Angry Emoji
				</button>
				<button className="emoji-btn" onClick={clearEmoji}>
					Clear Emoji
				</button>
				<button className="emoji-btn" onClick={allHeartEmoji}>
					Make Every Emoji A Heart
				</button>
			</div>
			{emojis.map(e => (
				<span
					onClick={() => {
						deleteEmoji(e.id);
					}}
					key={e.id}
					className="emoji"
				>
					{e.emoji}
				</span>
			))}
		</div>
	);
}
