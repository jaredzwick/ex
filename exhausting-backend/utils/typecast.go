package utils

import "k8s.io/apimachinery/pkg/util/intstr"

func Int32Ptr(i int32) *int32 {
	return &i
}

func IntstrPtr(i int) intstr.IntOrString {
	v := intstr.FromInt(i)
	return v
}
