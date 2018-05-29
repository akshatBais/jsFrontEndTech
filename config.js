const env = process.env;

export const nodeEnv  = env.NODE_ENV  || "development";
export default {
  port: env.PORT || 8081,
  host: env.HOST || 'localhost',
  get serverUrl() {
    return 'http://'+this.host+':'+this.port;
  }
};

console.log("here");
