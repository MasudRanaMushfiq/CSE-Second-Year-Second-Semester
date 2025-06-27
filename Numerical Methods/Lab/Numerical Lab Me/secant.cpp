#include <bits/stdc++.h>
using namespace std;

class SecantMethod
{
    float x0, x1, e;

    float function(float x)
    {
        return pow(x, 3) - 2 * x - 5; // Change this function as needed
    }

    void generateRandomValues()
    {
        srand(static_cast<unsigned>(time(0)));
        x0 = static_cast<float>(rand()) / RAND_MAX * 2;
        x1 = x0 + static_cast<float>(rand()) / RAND_MAX; // Ensure x1 != x0
        cout << "Initial Values: x0 = " << x0 << ", x1 = " << x1 << endl;
    }

public:
    SecantMethod(float e) : e(e)
    {
        generateRandomValues();
    }

    float findRoot()
    {
        float x2, f0, f1;
        int i = 1;

        do
        {
            f0 = function(x0);
            f1 = function(x1);
            x2 = x1 - f1 * (x1 - x0) / (f1 - f0);

            cout << "Iteration " << i << ", x2 = " << x2 << endl;

            x0 = x1;
            x1 = x2;
            i++;
        } while (abs(function(x2)) > e);

        return x2;
    }
};

int main()
{
    float e;
    cout << "Enter the error tolerance: "<<endl;
    cin >> e;

    SecantMethod secant(e);
    float root = secant.findRoot();
    cout << "The root is: " << root << endl;

    return 0;
}
