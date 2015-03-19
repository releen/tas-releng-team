namespace :artifacts do
  namespace :cf do
    desc 'Clean cf artifact files from target directory'
    task :clean, [:target_directory] do |_, args|
      require 'cmd/artifacts'

      Cmd::Artifacts.remove_cf_files(args.target_directory)
    end

    desc 'Retrieve a cf artifact'
    task :retrieve, [:cache_key] do |_, args|
      require 'json'
      require 'cmd/artifacts'
      require 'bucket_brigade/bucket_config'
      require 'bucket_brigade/bucket_list'

      bucket_configs = [BucketBrigade::BucketConfig.from_hash(JSON.parse(ENV.fetch('RIAK_BUCKET'))), BucketBrigade::BucketConfig.from_hash(JSON.parse(ENV.fetch('S3_BUCKET')))]
      storage = BucketBrigade::BucketList.build(bucket_configs)

      Cmd::Artifacts.retrieve_cf_files(args.cache_key, storage)
    end
  end
end
