import styles from './contact.module.css'
export function Contact() {
    return (
        <div id="contact" className={styles.container}>
            <h2>Entre em contato</h2>
           
                <form
                    className={styles.form}
                    action="https://formsubmit.co/wlissisdev@gmail.com"
                    method="post">
                    <input
                        type="hidden"
                        name="_autoresponse"
                        value="Recebemos sua mensagem, obrigado pelo contato e logo responderemos!"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        required
                    />
                    <input
                        type="email"
                        required
                        name="email"
                        placeholder="Seu email"
                    />
                    <input type="text"
                        name="subject"
                        placeholder="Assunto a tratar"
                    />
                    <textarea
                        className={styles}
                        name="message"
                        placeholder="Observações"
                        required>
                    </textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
    )
}