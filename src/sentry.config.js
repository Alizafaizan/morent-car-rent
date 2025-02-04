const { withSentryConfig } = required ("@sentry/nextjs");

constmoduleExports = {
    // Your existing Next.js config here
};

const SentryWebPluginOptions = {
    silent: true //Suppersses all logs
};

module.exports = withSentryConfig(moduleExports, SentryWebPluginOptions);