import { UserTypes } from './types';

const INITIAL_STATE = {
  data: [], // Usuarios
  initialvalues: {
    idUsuario: 0,
    loginUsuario: '',
    nomeUsuario: '',
    emailUsuario: '',
    pswUsuario: ''
  },
  error: false, // Retorna erro em alguma requisição 
  loading: false, // Controla o carregamento dos usuários na tela de exibição
  pendingAction: false, // Controla alguma ação realizada pelo usuário 
  activeModal: false, // Controla a modal de formulário na inserção e edição do registro
  feedback: false,
  loadingModal: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default reducer;
