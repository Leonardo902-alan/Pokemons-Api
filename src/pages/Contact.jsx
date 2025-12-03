export default function Contact() {
    return (
        <div className="container" style={{ maxWidth: "700px" }}>
            <h1 className="mb-4">Contacto</h1>

            <div className="card shadow-sm p-4">
                <form>

                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tu nombre"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="tu@email.com"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mensaje</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Escribe tu mensaje aquí..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </div>
    );
}
