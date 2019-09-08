const controller = new NegociacaoController();

// Usando jQuery aqui
$('.form').submit(controller.adiciona.bind(controller));