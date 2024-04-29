( () => {
  /**
   * Analisa uma string de senha em um valor numérico.
   *
   * @parametro {string} password
   * @retornar {number}
   */
  let evaluatePassword = ( password ) => {
    let score = 0;

    score = password.length;
    score = ( password.match( /[!]/gmi ) ) ? score + ( password.match( /[!]/gmi ).length * 3 ) : score;
    score = ( password.match( /[A-Z]/gm ) ) ? score + 3 : score;
    score = ( password.match( /[0-9]/gmi ) ) ? score + 3 : score;

    return score;
  };

  /**
   * Converte um score numérico em um objeto de dados de 'atualização do DOM'.
   * @parametro {number} score
   * @retornar {Object}
   */
  let scoreToData = ( score ) => {    
    if ( score >= 30 ) {
      return {
        width: '100%',
        color: '#26de81',
        label: 'Forte',
      };
    } else if ( score >= 20 ) {
      return {
        width: '66%',
        color: '#fd9644',
        label: 'Médio',
      };
    } else {
      return {
        width: '33%',
        color: '#fc5c65',
        label: 'Fraco',
      };
    }
  };

  window.addEventListener( 'DOMContentLoaded', () => {
    // referências dos elementos.
    let p = document.querySelector( '.js--password' );
    let b = document.querySelector( '.js--password-bar' );
    let t = document.querySelector( '.js--password-text' );

    // atualizações no campo de senha.
    p.addEventListener( 'input', () => {
      // Converter o valor atual em dados.
      let data = scoreToData( evaluatePassword( p.value ) );

      // Atualizar o DOM.
      // Rotulando label, indicando nivel de força da senha
      b.style.width = data.width;
      b.style.background = data.color;
      t.innerText = data.label;
    } );
  } );
} )();
