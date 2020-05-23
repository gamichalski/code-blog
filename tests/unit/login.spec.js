import { shallowMount } from "@vue/test-utils";
import Login from "@/views/login/Index";

const factory = (data) =>
  shallowMount(Login, {
    data: () => ({ ...data }),
  });

describe("Login", () => {
  it("Deve ser um instância do vue", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("Deve definir o primeiro elemento input com o valor de email do usuário passado", () => {
    const user = { username: "teste@codenation.com" };
    const wrapper = factory({ user });

    const inputs = wrapper.findAll("input");
    const username = inputs.at(0);

    expect(username.element.value).toEqual("teste@codenation.com");
  });

  it("Deve definir o segundo elemento input com o valor de senha do usuário passado", () => {
    const user = { password: "123456" };
    const wrapper = factory({ user });

    const inputs = wrapper.findAll("input");
    const username = inputs.at(1);

    expect(username.element.value).toEqual("123456");
  });

  it("Deve ser chamado a função de login quando o click no botão de 'Entrar' for disparado", () => {
    const wrapper = factory();
    wrapper.vm.login = jest.fn().mockImplementation(() => Promise.resolve());

    wrapper.find("button").trigger("click");

    expect(wrapper.vm.login).toBeCalled();
  });

  it("Deve ser redirecionado para a tela de posts quando a função de login retornar sucesso", async () => {
    const wrapper = factory();

    wrapper.vm.login = jest.fn().mockImplementation(() => Promise.resolve());
    wrapper.vm.$router = { push: jest.fn() };

    await wrapper.vm.onClickLogin();
    const [args] = wrapper.vm.$router.push.mock.calls[0];

    expect(args.name).toEqual("Posts");
  });

  it("Deve ser limpa a senha ao retornar erro na função de login", async () => {
    const wrapper = factory();

    wrapper.vm.login = jest.fn().mockImplementation(() => Promise.reject());

    await wrapper.vm.onClickLogin();

    expect(wrapper.vm.user.password).toEqual("");
  });

  it("Deve ter um snapshot igual", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
