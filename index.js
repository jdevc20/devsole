import chalk from 'chalk';
import dayjs from 'dayjs';
import figlet from 'figlet';

// Internal timer store
const timers = {};

function log(type, message, data = null) {
    const timestamp = chalk.gray(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}]`);

    const types = {
        info: chalk.blueBright('[INFO]'),
        success: chalk.greenBright('[SUCCESS]'),
        warn: chalk.yellowBright('[WARN]'),
        error: chalk.redBright('[ERROR]'),
        debug: chalk.magentaBright('[DEBUG]'),
    };

    const label = types[type] || chalk.white('[LOG]');

    console.log(`${timestamp} ${label} ${message}`);

    if (data) {
        console.dir(data, { depth: null, colors: true });
    }
}

// Attach log types
global.dev_info = (msg, data) => log('info', msg, data);
global.dev_success = (msg, data) => log('success', msg, data);
global.dev_warn = (msg, data) => log('warn', msg, data);
global.dev_error = (msg, data) => log('error', msg, data);
global.dev_debug = (msg, data) => log('debug', msg, data);

// New Functions 🔥
global.dev_banner = (text = 'Devsole') => {
    console.log(
        chalk.cyanBright(
            figlet.textSync(text, { horizontalLayout: 'default', font: 'Standard' })
        )
    );
};

global.dev_table = (data) => {
    console.table(data);
};

global.dev_time = (label = 'default') => {
    timers[label] = Date.now();
};

global.dev_timeEnd = (label = 'default') => {
    if (!timers[label]) {
        dev_warn(`Timer '${label}' does not exist.`);
        return;
    }
    const duration = Date.now() - timers[label];
    dev_info(`Timer '${label}': ${duration}ms`);
    delete timers[label];
};

global.dev_count = (label = 'default') => {
    console.count(chalk.magentaBright(label));
};

global.dev_clear = () => {
    console.clear();
    dev_info('Console cleared.');
};

global.dev_trace = (msg = 'Trace') => {
    console.trace(chalk.redBright(`[TRACE] ${msg}`));
};

global.dev_json = (obj, title = 'JSON Output') => {
    const timestamp = chalk.gray(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}]`);
    console.log(`${timestamp} ${chalk.cyanBright('[JSON]')} ${chalk.whiteBright(title)}`);
    console.log(chalk.greenBright(JSON.stringify(obj, null, 2)));
};

export {};
