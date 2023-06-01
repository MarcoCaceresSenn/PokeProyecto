<template>
    <div class="body">
        <form @submit.prevent="formPokemon">
            <input type="text" v-model="dataValue" placeholder="Nombre del pokemon">
            <button type="submit">Buscar</button>
        </form>
        <table class="styled-table" v-if="dataValue">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="dataValue">
                <td>{{ dataValue.id }}</td>
            </tr>
            <tr v-else>
                <td colspan="3">No hay datos</td>
            </tr>
          </tbody>
        </table>
        
    </div>
</template>

<script>
    import axios from 'axios'

export default {
  name: 'PokemonComponent',
  data() {
    return {
        dataValue: '',
    }
  },
  methods: {
    searchPokemon(){
        if (this.dataValue != ''){
            let respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${this.dataValue}`)
            this.dataValue = respuesta.data
        }
        else{
            alert("Digite un nombre de pokemon válido");
        }
    }
},
  formPokemon(){
      this.searchPokemon()
  }
}
</script>
