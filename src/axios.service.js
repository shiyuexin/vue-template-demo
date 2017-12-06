import axs from 'axios'
export default {
    get(url,data){
      return axs.get(url,data);
    },
    post(url,data){
      return axs.post(url,data);
    },
    put(url,data){
      return axs.put(url,data);
    },
    del(url,data){
      return axs.delete(url,data);
    },
    request(url,data,method){
      method = method || 'get';
      method = method.toLocaleLowerCase();
      switch(method){
        case 'get':
          return this.get(url,{params:data});
          break;
        case 'post':
          return this.post(url,data);
          break;
        case 'put':
          return this.put(url,data);
          break;
        case 'del':
          return this.del(url,data);
          break;
      }
  
    },
    all({reqs=[]}){
  
    }
  }