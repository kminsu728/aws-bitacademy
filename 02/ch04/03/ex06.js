//
// EC2 인스턴스 종료
//
const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

ec2.terminateInstances({
    InstanceIds: ['i-0a115758ffe55a84d']
}, function (error, data) {
    if (error) {
        console.log(error, error.stack);
        return;
    }

    console.log(data);
});