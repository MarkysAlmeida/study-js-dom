document.addEventListener('DOMContentLoaded', () => {
    const palette = document.getElementById('palette');
    const generateBtn = document.getElementById('generateBtn');
    const colorCodes = document.getElementById('colorCodes');
    //Criação das variaveis que vou usar, lembrando que ela está pegando os dados dos elementos que eu criei no html
    
    function generateRandomColor() {
        const letters = '0123456789ABCDEF'; 
        let color = '#';
        for (let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        /* 
        * Aqui eu criei essas duas variaveis para gerar os 
        * dados para gerar uma nova cor em hexadecimal
        */
    }

    function generatePalette() {
        palette.innerHTML = '';
        colorCodes.innerHTML = '';

        for(let i = 0; i < 5; i++) {
            const color = generateRandomColor();

            //Criar elemento de Cor
            const colorElement = document.createElement('div');
            colorElement.className = 'color';
            colorElement.style.backgroundColor = color;
            colorElement.textContent = color;

            // Adicionar evento para copiar
            colorElement.addEventListener('click', () => {
                navigator.clipboard.writeText(color)
                .then(() => { 
                    colorElement.textContent = 'Copiado!';
                    setTimeout(() => {
                        colorElement.textContent = color;
                    }, 1000);
                })
                .catch(err => {
                    console.error('Falha ao copiar: ', err);
                });
            });

            palette.appendChild(colorElement);

            //Adicionar código de cor abaixo
            const codeElement = document.createElement('div');
            codeElement.className = 'color-code';
            codeElement.textContent = color;
            colorCodes.appendChild(codeElement);

        }
    }

    generateBtn.addEventListener('click', generatePalette);
    generatePalette();//Gerar paleta inicial
});