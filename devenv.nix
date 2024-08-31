{ pkgs, ... }:

{
  name = "prisma-dev";

  cachix.enable = false;
  dotenv.disableHint = true;

  packages = [
    pkgs.nodejs
    pkgs.nodePackages.npm
    pkgs.nodePackages.vercel
    pkgs.nodePackages.prisma
    pkgs.openssl
  ];

  enterShell = ''
    export PRISMA_HOME=$PWD/.prisma
    export PRISMA_CLI_QUERY_ENGINE_TYPE="binary"

    export PRISMA_BINARY_MIRROR="$PRISMA_HOME/engines"

    mkdir -p $PRISMA_BINARY_MIRROR

    export PRISMA_QUERY_ENGINE_LIBRARY=$PWD/.prisma/lib/libquery_engine.node
    export PRISMA_QUERY_ENGINE_BINARY=$PWD/.prisma/engines/query-engine
    export PRISMA_SCHEMA_ENGINE_BINARY=$PWD/.prisma/engines/schema-engine

    # Create a symbolic link to the `prisma` executable in the current directory.
    ln -sf ${pkgs.prisma-engines}/bin $PWD/.prisma
    cp -r ${pkgs.prisma-engines}/lib $PWD/.prisma
    ln -sf ${pkgs.nodePackages.prisma}/lib/node_modules/prisma/node_modules/@prisma/engines $PWD/.prisma
  '';
}
