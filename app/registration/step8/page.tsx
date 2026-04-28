'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/app/context/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function Step8Page() {
  const router = useRouter();
  const { formData, updateFormData } = useRegistration();
  const [isLoading, setIsLoading] = useState(false);
  const buyerCanvasRef = useRef<HTMLCanvasElement>(null);
  const sellerCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState<'buyer' | 'seller' | null>(null);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>, type: 'buyer' | 'seller') => {
    setIsDrawing(type);
    const canvas = type === 'buyer' ? buyerCanvasRef.current : sellerCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>, type: 'buyer' | 'seller') => {
    if (isDrawing !== type) return;
    const canvas = type === 'buyer' ? buyerCanvasRef.current : sellerCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(null);
  };

  const clearSignature = (type: 'buyer' | 'seller') => {
    const canvas = type === 'buyer' ? buyerCanvasRef.current : sellerCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveSignature = (type: 'buyer' | 'seller') => {
    const canvas = type === 'buyer' ? buyerCanvasRef.current : sellerCanvasRef.current;
    if (!canvas) return;
    const signature = canvas.toDataURL();
    if (type === 'buyer') {
      updateFormData({ buyerSignature: signature });
    } else {
      updateFormData({ sellerSignature: signature });
    }
  };

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    saveSignature('buyer');
    saveSignature('seller');
    setIsLoading(true);
    setTimeout(() => {
      router.push('/registration/step9');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/registration/step7">
              <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4" /></Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">Property Registration</h1>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: '80%' }}></div>
          </div>
          <p className="text-sm text-foreground/60 mt-2">Step 8 of 10: Digital Signatures</p>
        </div>

        <Card className="max-w-2xl">
          <div className="p-8">
            <h2 className="text-xl font-bold text-primary mb-6">Digital Signatures</h2>
            <form onSubmit={handleNext} className="space-y-8">
              {/* Buyer Signature */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Buyer Signature</h3>
                <canvas
                  ref={buyerCanvasRef}
                  width={400}
                  height={150}
                  onMouseDown={(e) => startDrawing(e, 'buyer')}
                  onMouseMove={(e) => draw(e, 'buyer')}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  className="w-full border-2 border-dashed border-border rounded-lg bg-white cursor-crosshair"
                />
                <div className="flex gap-2 mt-3">
                  <Button type="button" variant="outline" size="sm" onClick={() => clearSignature('buyer')} className="flex-1">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                  <Button type="button" size="sm" onClick={() => saveSignature('buyer')} className="flex-1 bg-primary text-white hover:bg-primary/90">
                    Save Signature
                  </Button>
                </div>
              </div>

              <hr />

              {/* Seller Signature */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Seller Signature</h3>
                <canvas
                  ref={sellerCanvasRef}
                  width={400}
                  height={150}
                  onMouseDown={(e) => startDrawing(e, 'seller')}
                  onMouseMove={(e) => draw(e, 'seller')}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  className="w-full border-2 border-dashed border-border rounded-lg bg-white cursor-crosshair"
                />
                <div className="flex gap-2 mt-3">
                  <Button type="button" variant="outline" size="sm" onClick={() => clearSignature('seller')} className="flex-1">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                  <Button type="button" size="sm" onClick={() => saveSignature('seller')} className="flex-1 bg-primary text-white hover:bg-primary/90">
                    Save Signature
                  </Button>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/registration/step7" className="flex-1"><Button variant="outline" className="w-full">Back</Button></Link>
                <Button type="submit" disabled={isLoading} className="flex-1 bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2">
                  {isLoading ? 'Loading...' : 'Next'}<ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
