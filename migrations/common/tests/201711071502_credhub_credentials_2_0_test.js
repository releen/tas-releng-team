require("tap").mochaGlobals()
const should = require("should")
const migration = require("../201711071502_credhub_credentials_2_0.js");

original_hash = {
  properties: {
    ".properties.deploy_autoscaling_broker_credentials": "secret-broker-credentials",
    ".properties.deploy_autoscaling_encryption_key": "secret-autoscaling-key",
    ".backup-prepare.backup_encryption_key": "secret-backup-key",
    ".properties.consul_encrypt_key": "secret-consul-key",
    ".diego_database.bbs_encryption_passphrase": "secret-bbs-passphrase",
    ".nats.credentials": "secret-nats-credentials",
    ".nfs_server.blobstore_secret": "secret-blobstore-secret",
    ".properties.deploy_notifications_encryption_key": "secret-notifications-encryption-key",
    ".properties.push_pivotal_account_encryption_key": "secret-pivotal-account-encryption-key",
    ".properties.push_usage_service_secret_token": "secret-usage-service-token",
    ".router.route_services_secret": "secret-route-services-secret",
  },
  variable_migrations: []
};

migrated_hash = {
  properties: {
    ".properties.deploy_autoscaling_broker_credentials": "secret-broker-credentials",
    ".properties.deploy_autoscaling_encryption_key": "secret-autoscaling-key",
    ".backup-prepare.backup_encryption_key": "secret-backup-key",
    ".diego_database.bbs_encryption_passphrase": "secret-bbs-passphrase",
    ".nats.credentials": "secret-nats-credentials",
    ".properties.consul_encrypt_key": "secret-consul-key",
    ".nfs_server.blobstore_secret": "secret-blobstore-secret",
    ".properties.deploy_notifications_encryption_key": "secret-notifications-encryption-key",
    ".properties.push_pivotal_account_encryption_key": "secret-pivotal-account-encryption-key",
    ".properties.push_usage_service_secret_token": "secret-usage-service-token",
    ".router.route_services_secret": "secret-route-services-secret",
  },
  variable_migrations: [
    {
      "from": "secret-broker-credentials",
      "to_variable": "deploy-autoscaling-broker-credentials"
    },
    {
      "from": "secret-autoscaling-key",
      "to_variable": "deploy-autoscaling-encryption-key"
    },
    {
      "from": "secret-backup-key",
      "to_variable": "deploy-autoscaling-encryption-key"
    },
    {
      "from": "secret-consul-key",
      "to_variable": "consul-encryption-key"
    },
    {
      "from": "secret-bbs-passphrase",
      "to_variable": "diego-db-bbs-encryption-passphrase"
    },
    {
      "from": "secret-nats-credentials",
      "to_variable": "nats-credentials"
    },
    {
      "from": "secret-blobstore-secret",
      "to_variable": "nfs-server-blobstore-secret"
    },
    {
      "from": "secret-notifications-encryption-key",
      "to_variable": "deploy-notifications-encryption-key"
    },
    {
      "from": "secret-pivotal-account-encryption-key",
      "to_variable": "push-pivotal-account-encryption-key"
    },
    {
      "from": "secret-usage-service-token",
      "to_variable": "push-usage-service-secret-token"
    },
    {
      "from": "secret-route-services-secret",
      "to_variable": "router-route-services-secret"
    }
  ]
};

describe("migrate 2.0 credentials to credhub", function() {
  context("when migrations run", function() {
    it("returns the expected migrated hash", function(){
      migration.migrate(original_hash).should.deepEqual(migrated_hash);
    });
  });
});
