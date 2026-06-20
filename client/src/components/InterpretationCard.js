import React, { useEffect, useState } from 'react';

export default function InterpretationCard({ label, number, path, description }) {
  const [interpretation, setInterpretation] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!number || !path) {
      setInterpretation('');
      setStatus('idle');
      return;
    }

    let isMounted = true;
    const publicUrl = process.env.PUBLIC_URL || '';
    const interpretationPath = `${publicUrl}/interpretations/${path}/${number}.md`;

    setStatus('loading');

    fetch(interpretationPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Interpretation not found: ${interpretationPath}`);
        }
        if (response.headers.get('content-type')?.includes('text/html')) {
          throw new Error(`Interpretation resolved to HTML: ${interpretationPath}`);
        }
        return response.text();
      })
      .then((text) => {
        if (isMounted) {
          setInterpretation(text.trim());
          setStatus('ready');
        }
      })
      .catch(() => {
        if (isMounted) {
          setInterpretation('No se encontro una interpretacion para este numero.');
          setStatus('error');
        }
      });

    return () => {
      isMounted = false;
    };
  }, [number, path]);

  return (
    <article className="interpretationCard">
      <div className="interpretationHeader">
        <span className="interpretationLabel">{label}</span>
        <span className="interpretationNumber">{number}</span>
      </div>
      {description && <p className="interpretationDescription">{description}</p>}
      <div className="interpretationText">
        {status === 'loading' ? 'Cargando interpretacion...' : interpretation}
      </div>
    </article>
  );
}
