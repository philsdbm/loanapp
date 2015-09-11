Setup in Cloud9

Useful link - https://developers.openshift.com/en/node-js-example-meanstack.html

1. Run '~/workspace (master) $ npm install      // check first //-g grunt grunt-cli bower yo generator-angular-fullstack' 
2. Run '~/workspace (master) $ mkdir yeogenerator'
3. Run '~/workspace (master) $ cd yeogenerator'
4. ~/workspace/yeogenerator (master) $ git clone git@github.com:philsdbm/generator-angular-fullstack-crud-local.git
5. ~/workspace/yeogenerator (master) $ cd generator-angular-fullstack-crud-local/
6. ~/workspace/yeogenerator/generator-angular-fullstack-crud-local (master) $ npm link
7. ~/workspace/yeogenerator/generator-angular-fullstack-crud-local (master) $ cd ..
8. ~/workspace/yeogenerator (master) $ cd ..
9. make changes
10. ~/workspace (master) $ yo angular-fullstack-crud-local
11. ~/workspace (master) $ ~/workspace (master) $ npm install