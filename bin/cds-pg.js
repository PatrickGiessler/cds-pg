#!/usr/bin/env node

// REVISIT: That's just an initial dummy task
// eslint-disable-next-line
const [, , action, model, to, db] = process.argv

const deploy = async () => {
  const cds = require('@sap/cds')
  const cds_deploy = require('@sap/cds/lib/dbs/cds-deploy')

  await cds.connect()
  await cds_deploy(model, {}).to(db)
}

switch (action) {
  case 'deploy':
    deploy()
    break
  default:
    break
}
