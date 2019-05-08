# tdd-app-vue

#tdd-app

Executar os testes uma única vez

    yarn test:unit

Observar por mudanças nos arquivos e executar os testes

    yarn test:unit:watch



#Aumentar Watchers

caso o comando npm run test:unit:watch dê erro por falta de watchers livres, execute o comando:

    echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
    

Links

[Fazendo uma aplicação em Vue.js com TDD](https://medium.com/magnetis-backstage/fazendo-uma-aplica%C3%A7%C3%A3o-em-vue-js-com-tdd-um-guia-extensivo-para-quem-quer-aprender-parte-1-d9952be6a29)
