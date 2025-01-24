package utils

import (
	"fmt"
	"log"
	"path/filepath"

	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/tools/clientcmd"
)

func InitializeKubernetesClient() (*kubernetes.Clientset, error) {
	config, err := clientcmd.BuildConfigFromFlags("", filepath.Join(homeDir(), ".kube", "config"))
	if err != nil {
		log.Fatalf("Failed to load Kubernetes config: %v", err)
		return nil, fmt.Errorf("Failed to load Kubernetes config: %v", err)
	}
	clientset, err := kubernetes.NewForConfig(config)
	if err != nil {
		log.Fatalf("Failed to create Kubernetes client: %v", err)
		return nil, fmt.Errorf("Failed to create Kubernetes config: %v", err)
	}
	return clientset, nil
}
