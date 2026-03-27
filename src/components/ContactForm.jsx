import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, sending, success, error
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setSubmitStatus('sending');
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Nueva consulta - ${data.servicio}`);
      const body = encodeURIComponent(
        `Nombre: ${data.nombre}\n` +
        `Email: ${data.email}\n` +
        `Teléfono: ${data.telefono || 'No proporcionado'}\n` +
        `Servicio: ${data.servicio}\n` +
        `Mensaje: ${data.mensaje || 'No especificado'}\n\n` +
        `Enviado desde socioia.co`
      );
      
      const mailtoLink = `mailto:aquilarjuan123@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label htmlFor="nombre">Nombre completo *</label>
        <input
          id="nombre"
          type="text"
          {...register('nombre', { required: true, minLength: 3 })}
          placeholder="Juan Pérez"
        />
        {errors.nombre && (
          <span className={styles.error}>Nombre requerido (mínimo 3 caracteres)</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          {...register('email', { 
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })}
          placeholder="juan@ejemplo.com"
        />
        {errors.email && (
          <span className={styles.error}>Email válido requerido</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="telefono">Teléfono</label>
        <input
          id="telefono"
          type="tel"
          {...register('telefono')}
          placeholder="+57 300 123 4567"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="servicio">Servicio de interés *</label>
        <select id="servicio" {...register('servicio', { required: true })}>
          <option value="">Selecciona un servicio</option>
          <option value="Desarrollo Digital">Desarrollo Digital</option>
          <option value="Agentes de IA">Agentes de IA</option>
          <option value="Marketing Digital">Marketing Digital</option>
          <option value="Combinación">Combinación de servicios</option>
        </select>
        {errors.servicio && (
          <span className={styles.error}>Por favor selecciona un servicio</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="mensaje">Mensaje (opcional)</label>
        <textarea
          id="mensaje"
          rows="4"
          {...register('mensaje')}
          placeholder="Cuéntanos sobre tu proyecto..."
        />
      </div>

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={submitStatus === 'sending'}
      >
        {submitStatus === 'sending' ? 'Enviando...' : 'Enviar solicitud'}
      </button>

      {submitStatus === 'success' && (
        <div className={styles.successMsg}>
          ✓ Abriendo tu cliente de email. Te contactamos en 24 horas.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.errorMsg}>
          ✗ Algo salió mal. Por favor intenta vía WhatsApp: 311-367-8555
        </div>
      )}
    </form>
  );
};

export default ContactForm;