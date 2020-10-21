<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn flat v-on="on" outline color="primary" class="text-none">
          Ajuda
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline primary white--text"
          primary-title
        >
          Test front end - Uello
        </v-card-title>

        <v-card-text>
          <p>
            Caso queira navegar no modo aleatorio <span class="link primary--text" @click="updateTracking()">clique aqui</span>
          </p>
          <p>
            Ou escolha um status de entrega:
            <span class="link primary--text" @click="updateTracking(0)">Solicitação</span>,
            <span class="link primary--text" @click="updateTracking(1)">Aguardando Coleta</span>,
            <span class="link primary--text" @click="updateTracking(2)">Motorista em trânsito</span> ou
            <span class="link primary--text" @click="updateTracking(3)">Pedido coletado</span>
          </p>
          <p class="mt-3">
            Veja o mockup do designer <a href="img/Tracking.png"  target="_blank">aqui</a> e a massa de dados <a href="/base_data.json" target="_blank">aqui</a>
          </p>
          <div class="elevation-1 pa-3">
            <div v-for="paragraph in testDescription" :key="paragraph.header">
              <h4>
                {{paragraph.header}}
              </h4>
              <ul>
                <li v-for="(item, index) in paragraph.list" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      testDescription: [
        {
          header: 'Requisitos negócio',
          list: [
            'Recriar layout baseando-se na imagem anexada',
            'Utilizar os dados no fim deste arquivo para preencher a tela',
            'Buscar de forma randômica qual dos dados irá exibir na tela (será disponibilizado 4 cenários, deverá ser lido um dos cenários de acordo com a escolha randômica)',
            'Buscar GeoLocalização (GeoCoding) utilizando API do Google',
            'Exibir mapa mostrando localização atual do entregador (se houver) e localização da entrega'
          ]
        },
        {
          header: 'Requisitos Técnicos',
          list: ['ES6', 'Utilizar npm para libs externas', 'Framework JS']
        },
        {
          header: 'O que se espera',
          list: [
            'Utilização de boas práticas',
            'Desenvolvimento da Lógica para leitura dos dados',
            'Buscar GeoLocalização',
            'Barra de status acompanhar o status atual do pedido'
          ]
        },
        {
          header: 'Diferenciais',
          list: ['SASS/SCSS', 'Gulp (ou similar)']
        }

      ]
    }
  },
  methods: {
    updateTracking (index) {
      this.$emit('reload', index)
      this.$router.replace({
        name: 'trackingDetails',
        params: {
          index
        }
      })
      this.dialog = false
    }
  }
}
</script>

<style lang="stylus">
.link
  cursor pointer
</style>
