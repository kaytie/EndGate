﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndGate.Core.Assets.Sizes
{
    public class Size2d
    {
        public Size2d()
            : this(0)
        {
        }

        public Size2d(double size)
        {
            Width = size;
            Height = size;
        }

        public Size2d(double width, double height)
        {
            Width = width;
            Height = height;
        }

        public double Width { get; set; }
        public double Height { get; set; }

        public Size2d Clone()
        {
            return new Size2d(Width, Height);
        }

        public bool Equivalent(Size2d s1)
        {
            return Width == s1.Width && Height == s1.Height;
        }

        public void Apply(Func<double, double> action)
        {
            Width = action(Width);
            Height = action(Height);
        }

        public void Trigger(Action<double> action)
        {
            action(Width);
            action(Height);
        }

        public double HalfWidth
        {
            get
            {
                return Width / 2;
            }
            set
            {
                Width = value * 2;
            }
        }

        public double HalfHeight
        {
            get
            {
                return Height / 2;
            }
            set
            {
                Height = value * 2;
            }
        }

        public Size2d Add(Number val)
        {
            return this + val;
        }

        public Size2d Add(Size2d s1)
        {
            return this + s1;
        }

        public Size2d Multiply(Number val)
        {
            return this * val;
        }

        public Size2d Multiply(Size2d s1)
        {
            return this * s1;
        }

        public Size2d Subtract(Number val)
        {
            return this - val;
        }

        public Size2d Subtract(Size2d s1)
        {
            return this - s1;
        }

        public Size2d SubtractFrom(Size2d s1)
        {
            return s1 - this;
        }

        public Size2d SubtractFrom(Number val)
        {
            return val - this;
        }

        public Size2d Divide(Number val)
        {
            return this / val;
        }

        public Size2d Divide(Size2d s1)
        {
            return this / s1;
        }

        public Size2d DivideFrom(Number val)
        {
            return val / this;
        }

        public Size2d DivideFrom(Size2d s1)
        {
            return s1 / this;
        }

        public static Size2d operator *(Size2d s1, Size2d s2)
        {
            return new Size2d(s1.Width * s2.Width, s1.Height * s2.Height);
        }

        public static Size2d operator *(Size2d s1, Number val)
        {
            return new Size2d(s1.Width * val, s1.Height * val);
        }

        public static Size2d operator *(Number val, Size2d s1)
        {
            return s1 * val;
        }

        public static Size2d operator +(Size2d s1, Size2d s2)
        {
            return new Size2d(s1.Width + s2.Width, s1.Height + s2.Height);
        }

        public static Size2d operator +(Size2d s1, Number val)
        {
            return new Size2d(s1.Width + val, s1.Height + val);
        }

        public static Size2d operator +(Number val, Size2d s1)
        {
            return s1 + val;
        }

        public static Size2d operator -(Size2d s1, Size2d s2)
        {
            return new Size2d(s1.Width - s2.Width, s1.Height - s2.Height);
        }

        public static Size2d operator -(Size2d s1, Number val)
        {
            return new Size2d(s1.Width - val, s1.Height - val);
        }

        public static Size2d operator -(Number val, Size2d s1)
        {
            return new Size2d(val - s1.Width, val - s1.Height);
        }

        public static Size2d operator /(Size2d s1, Size2d s2)
        {
            return new Size2d(s1.Width / s2.Width, s1.Height / s2.Height);
        }

        public static Size2d operator /(Size2d s1, Number val)
        {
            return new Size2d(s1.Width / val, s1.Height / val);
        }

        public static Size2d operator /(Number val, Size2d s1)
        {
            return new Size2d(val / s1.Width, val / s1.Height);
        }

        public static Size2d operator -(Size2d s1)
        {
            return s1 * -1;
        }

        public static Size2d Zero = new Size2d(0);
    }
}
