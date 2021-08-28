## 예제 실행(AWS에 stack 생성하기)

### ex03
```bash
$ aws cloudformation create-stack --stack-name myserver --template-body https://raw.githubusercontent.com/kminsu728/aws-practices/main/02/ch04/04/ex03.json --parameters ParameterKey=KeyName,ParameterValue=mykey_inzent ParameterKey=VPC,ParameterValue=vpc-48b12e23 ParameterKey=InstanceType,ParameterValue=t2.micro

$ aws cloudformation describe-stacks --stack-name myserver --query Stacks[0].Outputs

$ aws cloudformation delete-stack --stack-name myserver
```
### ex04
```bash
$ aws cloudformation create-stack --stack-name myserver --template-body https://raw.githubusercontent.com/kminsu728/aws-practices/main/02/ch04/04/ex04.json --parameters ParameterKey=KeyName,ParameterValue=mykey_inznet ParameterKey=VPC,ParameterValue=vpc-48b12e23 ParameterKey=InstanceType,ParameterValue=t2.micro

$ aws cloudformation describe-stacks --stack-name myserver --query Stacks[0].Outputs

$ aws cloudformation delete-stack --stack-name myserver
```

