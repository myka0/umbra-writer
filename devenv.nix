{ pkgs, ... }:

{
  name = "prisma-dev";

  cachix.enable = false;
  dotenv.disableHint = true;

  packages = with pkgs; [
    nodejs
    nodePackages.npm
    nodePackages.vercel
    nodePackages.prisma
    openssl
  ];

  enterShell = ''
    export PRISMA_HOME=$PWD/.prisma
    export PRISMA_CLI_QUERY_ENGINE_TYPE="binary"

    export PRISMA_BINARY_MIRROR="$PRISMA_HOME/engines"

    export PRISMA_QUERY_ENGINE_LIBRARY=$PRISMA_HOME/lib/libquery_engine.node
    export PRISMA_QUERY_ENGINE_BINARY=$PRISMA_HOME/engines/query-engine
    export PRISMA_SCHEMA_ENGINE_BINARY=$PRISMA_HOME/engines/schema-engine
  '';
}
