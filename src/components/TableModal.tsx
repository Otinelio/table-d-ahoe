import { useState } from 'react';
import { Hash } from 'lucide-react';
import './TableModal.css';

interface TableModalProps {
  onConfirm: (tableNumber: string) => void;
}

export default function TableModal({ onConfirm }: TableModalProps) {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    const trimmed = value.trim();
    if (trimmed) {
      localStorage.setItem('tableNumber_dahoe', trimmed);
      onConfirm(trimmed);
    }
  };

  return (
    <div className="table-modal__overlay">
      <div className="table-modal">
        <Hash size={40} strokeWidth={1.5} color="#C45C1A" />
        <h2 className="table-modal__title">VOTRE TABLE ?</h2>
        <p className="table-modal__subtitle">Entrez le numéro indiqué sur votre table</p>
        <input
          type="text"
          className="table-modal__input"
          placeholder="ex : 12"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          autoFocus
        />
        <button className="table-modal__btn" onClick={handleSubmit}>
          CONFIRMER
        </button>
      </div>
    </div>
  );
}
