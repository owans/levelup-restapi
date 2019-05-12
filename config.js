const { existsSync } = require('fs');
const dotenv = require('dotenv-extended');
const dotenvExpand = require('dotenv-expand');
const dotenvParseVariables = require('dotenv-parse-variables');
/**
 * loads config from environment variables
 * @returns {Object} Config object
 */
const loadConfig = () => {
  // If no .env file was found, just use the process env vars
  if (!existsSync('.env')) {
    return process.env;
  }

  // Load .env file (use .schema and .defaults)
  let env = dotenv.load({
    silent: false,
    errorOnMissing: true,
    errorOnExtra: true,
  });

  // Expand env vars within others (ie: "SERVICE_URL=$HOSTNAME:$PORT")
  env = dotenvExpand(env);

  // Parse env value strings into JavaScript types (ie: "SUPPRESS_EMAILS=true")
  env = dotenvParseVariables(env);

  env.NODE_ENV = process.env.NODE_ENV;

  return env;
};

module.exports = loadConfig;