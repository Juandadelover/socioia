import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { WhatsApp } from './ui/icons';
import { whatsappLink } from '../data/site';
import styles from './Contact.module.css';

const PROJECT_TYPES = [
  'Software a la medida',
  'Página web o tienda en línea',
  'App móvil',
  'Inteligencia artificial',
  'Marketing digital',
  'Todavía no lo tengo claro',
];

// Arma el mensaje y abre WhatsApp con todo listo para enviar.
const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { tipo: PROJECT_TYPES[0] } });

  const onSubmit = (data) => {
    const lines = [
      'Hola SocioIA, quiero cotizar un proyecto.',
      `Nombre: ${data.nombre}`,
      data.negocio && `Negocio: ${data.negocio}`,
      `Tipo de proyecto: ${data.tipo}`,
      data.mensaje && `Detalle: ${data.mensaje}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="nombre">Tu nombre</label>
          <input
            id="nombre"
            autoComplete="name"
            aria-invalid={errors.nombre ? 'true' : 'false'}
            aria-describedby={errors.nombre ? 'nombre-error' : undefined}
            {...register('nombre', { required: true, minLength: 2 })}
          />
          {errors.nombre && (
            <span id="nombre-error" className={styles.error}>
              Escribe tu nombre para saber cómo llamarte.
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="negocio">
            Negocio <span className={styles.optional}>(opcional)</span>
          </label>
          <input id="negocio" autoComplete="organization" {...register('negocio')} />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="tipo">¿Qué necesitas?</label>
        <select id="tipo" {...register('tipo')}>
          {PROJECT_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="mensaje">
          Cuéntanos un poco <span className={styles.optional}>(opcional)</span>
        </label>
        <textarea
          id="mensaje"
          rows={4}
          placeholder="Ej.: Tengo una distribuidora y llevo los pedidos en Excel. Quiero que los vendedores los registren desde el celular."
          {...register('mensaje', { maxLength: 800 })}
        />
      </div>

      <button type="submit" className={`btn btn-primary ${styles.submit}`}>
        <WhatsApp />
        Enviar por WhatsApp
      </button>
      <p className={styles.note} role="status">
        {sent
          ? 'Abrimos WhatsApp con tu mensaje listo. Solo falta que lo envíes.'
          : 'Se abrirá WhatsApp con tu mensaje listo para enviar.'}
      </p>
    </form>
  );
};

export default ContactForm;
