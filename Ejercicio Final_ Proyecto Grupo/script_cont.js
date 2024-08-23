const form = document.getElementById('contactForm');

form.addEventListener('submit', handleSubmit)

async function handleSubmit(e) {
    e.preventDefault()

    const form = new FormData(this)
    const response = await fetch (this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })

    if(response.ok){
        this.reset()
        alert('Gracias por contactarnos, pronto nos contactaremos contigo')
    }
}