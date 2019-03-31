import { action, autorun, observable } from 'mobx';
import getCookie from '../services/auth';
import * as services from '../services/mainApis';

class MainStore {
  @observable alarms = [];

  @observable token = '';

  @observable state = 'pending';

  @action getToken = () => {
    this.token = getCookie('csrftoken');
  };

  @action
  fetchAlarms = data => {
    services.fetchAlarms(data).then(
      action('fetchSuccess', alarms => {
        this.alarms = alarms;
        this.state = 'done';
      }),
      // inline created action
      action('fetchError', () => {
        this.state = 'error';
      }),
    );
  };
}

const store = new MainStore();
autorun(() => {
  store.getToken();
});

export default store;
