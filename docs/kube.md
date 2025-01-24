# Ensure kubernetes cluster is running
`minikube start`

# Expose the service 
`kubectl proxy`

# Get an admin token to login
`kubectl -n kubernetes-dashboard create token admin-user`




## Troubleshooting:
    - To create an admin user
        Create a Service Account:

        ```
        cat <<EOF | kubectl apply -f -
        apiVersion: v1
        kind: ServiceAccount
        metadata:
        name: admin-user
        namespace: kubernetes-dashboard
        EOF
        ```


        Bind the Admin Role:

        ```
        cat <<EOF | kubectl apply -f -
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
        name: admin-user-binding
        roleRef:
        apiGroup: rbac.authorization.k8s.io
        kind: ClusterRole
        name: cluster-admin
        subjects:
        - kind: ServiceAccount
        name: admin-user
        namespace: kubernetes-dashboard
        EOF
        ```

        Then Create the token:
        `kubectl -n kubernetes-dashboard create token admin-user`

    - If the dashboard needs to be installed:
        `kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml`


    - "The ClusterRoleBinding "kubernetes-dashboard" is invalid: roleRef: Invalid value: rbac.RoleRef{APIGroup:"rbac.authorization.k8s.io", Kind:"ClusterRole", Name:"kubernetes-dashboard"}: cannot change roleRef"
        `kubectl delete clusterrolebinding kubernetes-dashboard`
        `kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml`
