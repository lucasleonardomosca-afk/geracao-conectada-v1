
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  icon?: string;
}

/**
 * Componente que garante que o usuário nunca veja um erro técnico.
 * Em caso de falha no carregamento, exibe uma mensagem acolhedora.
 */
const SmartImage: React.FC<SmartImageProps> = ({ src, alt, className, icon = "📱" }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-50 border-2 border-slate-100 p-8 text-center min-h-[200px] ${className}`}>
        <span className="text-7xl mb-6 opacity-40 grayscale" role="img" aria-hidden="true">{icon}</span>
        <p className="text-xl font-black text-slate-400 leading-tight">
          Vamos com calma. <br/> O importante é continuar.
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

export default SmartImage;
